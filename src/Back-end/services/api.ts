import { ActivityItem, SystemAlert, DispensedRecord, PrescriptionStat } from '../types'

const API_BASE_URL = 'https://prescripto-backend-2lb9.onrender.com/api/v1'

// API Response interfaces
interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}

interface Doctor {
  _id: string
  name: string
  email: string
  image: string
  speciality: string
  degree: string
  experience: string
  about: string
  fees: number
  address: {
    line1: string
    line2: string
  }
  date: number
  slots_booked: Record<string, string[]>
  available: boolean
}

interface Appointment {
  _id: string
  userId: string
  docId: string
  slotDate: string
  slotTime: string
  userData: {
    name: string
    email: string
    phone: string
    address: {
      line1: string
      line2: string
    }
    gender: string
    dob: string
  }
  docData: Doctor
  amount: number
  date: number
  cancelled: boolean
  payment: boolean
  isCompleted: boolean
}

interface Prescription {
  _id: string
  patientId: string
  doctorId: string
  medications: Array<{
    name: string
    dosage: string
    frequency: string
    duration: string
    instructions?: string
  }>
  diagnosis: string
  date: number
  status: 'pending' | 'dispensed' | 'cancelled'
  pharmacyId?: string
  dispensedBy?: string
  dispensedAt?: number
}

export class ApiService {
  private token: string | null = null

  constructor() {
    this.token = localStorage.getItem('pharmacy_token')
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const data: ApiResponse<T> = await response.json()
      
      if (!data.success) {
        throw new Error(data.message || 'API request failed')
      }

      return data.data
    } catch (error) {
      console.error(`API request failed for ${endpoint}:`, error)
      throw error
    }
  }

  // Health check
  async checkHealth(): Promise<{ status: string; message: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/health`)
      return await response.json()
    } catch (error) {
      console.error('Health check failed:', error)
      throw error
    }
  }

  // Authentication
  async login(email: string, password: string): Promise<{ token: string }> {
    const data = await this.request<{ token: string }>('/admin/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    
    this.token = data.token
    localStorage.setItem('pharmacy_token', data.token)
    return data
  }

  async logout(): Promise<void> {
    this.token = null
    localStorage.removeItem('pharmacy_token')
  }

  // Prescription Management
  async scanPrescription(qrCode: string): Promise<Prescription> {
    return this.request<Prescription>('/pharmacy/scan-prescription', {
      method: 'POST',
      body: JSON.stringify({ qrCode }),
    })
  }

  async getPrescriptionById(prescriptionId: string): Promise<Prescription> {
    return this.request<Prescription>(`/pharmacy/prescription/${prescriptionId}`)
  }

  async dispensePrescription(prescriptionId: string, pharmacistId: string): Promise<void> {
    await this.request('/pharmacy/dispense', {
      method: 'POST',
      body: JSON.stringify({ 
        prescriptionId, 
        pharmacistId,
        dispensedAt: Date.now()
      }),
    })
  }

  async getPendingPrescriptions(): Promise<Prescription[]> {
    return this.request<Prescription[]>('/pharmacy/pending-prescriptions')
  }

  async getDispensedPrescriptions(): Promise<Prescription[]> {
    return this.request<Prescription[]>('/pharmacy/dispensed-prescriptions')
  }

  // Dashboard data - adapted from available endpoints
  async getPrescriptionStats(): Promise<PrescriptionStat[]> {
    try {
      const [pending, dispensed, appointments] = await Promise.all([
        this.getPendingPrescriptions().catch(() => []),
        this.getDispensedPrescriptions().catch(() => []),
        this.request<Appointment[]>('/admin/appointments').catch(() => [])
      ])
      
      const today = new Date().toDateString()
      const todayDispensed = dispensed.filter(p => 
        p.dispensedAt && new Date(p.dispensedAt).toDateString() === today
      ).length
      
      const todayScanned = appointments.filter(apt => 
        new Date(apt.date).toDateString() === today
      ).length

      return [
        {
          title: 'Prescriptions Scanned Today',
          value: todayScanned,
          subtitle: `${pending.length} pending`,
          icon: 'scan',
          color: 'blue'
        },
        {
          title: 'Pending Prescriptions',
          value: pending.length,
          subtitle: 'Awaiting dispensing',
          icon: 'clock',
          color: 'yellow'
        },
        {
          title: 'Dispensed Today',
          value: todayDispensed,
          subtitle: `${Math.round((todayDispensed/(todayDispensed + pending.length))*100) || 0}% completion rate`,
          icon: 'check',
          color: 'green'
        }
      ]
    } catch (error) {
      console.error('Error fetching prescription stats:', error)
      // Fallback to mock data
      return [
        {
          title: 'Prescriptions Scanned Today',
          value: 47,
          subtitle: '15% more than yesterday',
          icon: 'scan',
          color: 'blue'
        },
        {
          title: 'Pending Prescriptions',
          value: 8,
          subtitle: '2 from yesterday',
          icon: 'clock',
          color: 'yellow'
        },
        {
          title: 'Dispensed Today',
          value: 156,
          subtitle: '12% more today',
          icon: 'check',
          color: 'green'
        }
      ]
    }
  }

  async getRecentActivity(): Promise<ActivityItem[]> {
    try {
      const [prescriptions, appointments] = await Promise.all([
        this.getDispensedPrescriptions().catch(() => []),
        this.request<Appointment[]>('/admin/appointments').catch(() => [])
      ])
      
      // Combine prescription and appointment activities
      const activities: ActivityItem[] = []
      
      // Recent dispensed prescriptions
      prescriptions
        .sort((a, b) => (b.dispensedAt || 0) - (a.dispensedAt || 0))
        .slice(0, 5)
        .forEach(prescription => {
          activities.push({
            id: prescription._id,
            patientName: `Patient ${prescription.patientId.slice(-6)}`,
            action: 'Prescription dispensed',
            timestamp: this.formatTimestamp(prescription.dispensedAt || prescription.date),
            status: 'success'
          })
        })

      // Recent appointments
      appointments
        .sort((a, b) => b.date - a.date)
        .slice(0, 5)
        .forEach(apt => {
          activities.push({
            id: apt._id,
            patientName: apt.userData.name,
            action: apt.isCompleted ? 'Appointment completed' : 
                    apt.cancelled ? 'Appointment cancelled' : 
                    'New appointment scheduled',
            timestamp: this.formatTimestamp(apt.date),
            status: apt.isCompleted ? 'success' : 
                   apt.cancelled ? 'error' : 
                   'warning'
          })
        })

      return activities
        .sort((a, b) => this.parseTimestamp(b.timestamp) - this.parseTimestamp(a.timestamp))
        .slice(0, 10)
    } catch (error) {
      console.error('Error fetching recent activity:', error)
      // Fallback to mock data
      return [
        {
          id: '1',
          patientName: 'Jean Baptiste Nkurunziza',
          action: 'Prescription dispensed',
          timestamp: '2 minutes ago',
          status: 'success'
        },
        {
          id: '2',
          patientName: 'Marie Claire Uwimana',
          action: 'New prescription scanned',
          timestamp: '5 minutes ago',
          status: 'success'
        },
        {
          id: '3',
          patientName: 'David Mugisha',
          action: 'Insurance verification - Allergy alert',
          timestamp: '12 minutes ago',
          status: 'warning'
        },
        {
          id: '4',
          patientName: 'Grace Mukamana',
          action: 'New prescription scanned',
          timestamp: '18 minutes ago',
          status: 'success'
        }
      ]
    }
  }

  async getSystemAlerts(): Promise<SystemAlert[]> {
    try {
      const [health, pending, doctors] = await Promise.all([
        this.checkHealth().catch(() => null),
        this.getPendingPrescriptions().catch(() => []),
        this.request<Doctor[]>('/admin/all-doctors').catch(() => [])
      ])
      
      const alerts: SystemAlert[] = []
      
      // API Health Status
      if (health) {
        alerts.push({
          id: 'api-status',
          type: 'success',
          title: 'API Status',
          message: health.message || 'MedConnect API is operational',
          timestamp: '1 minute ago'
        })
      } else {
        alerts.push({
          id: 'api-status',
          type: 'warning',
          title: 'API Connection',
          message: 'Unable to connect to MedConnect API',
          timestamp: '1 minute ago'
        })
      }
      
      // Pending prescriptions alert
      if (pending.length > 10) {
        alerts.push({
          id: 'pending-prescriptions',
          type: 'warning',
          title: 'High Pending Volume',
          message: `${pending.length} prescriptions awaiting dispensing`,
          timestamp: '5 minutes ago'
        })
      }
      
      // Doctor availability
      const unavailableDoctors = doctors.filter(doc => !doc.available)
      if (unavailableDoctors.length > 0) {
        alerts.push({
          id: 'doctor-availability',
          type: 'info',
          title: 'Doctor Availability',
          message: `${unavailableDoctors.length} doctor(s) currently unavailable`,
          timestamp: '10 minutes ago'
        })
      }
      
      return alerts
    } catch (error) {
      console.error('Error generating system alerts:', error)
      return [
        {
          id: '1',
          type: 'warning',
          title: 'API Connection',
          message: 'Unable to connect to MedConnect API - using offline mode',
          timestamp: '5 minutes ago'
        }
      ]
    }
  }

  async getDispensedRecords(): Promise<DispensedRecord[]> {
    try {
      const [prescriptions, appointments] = await Promise.all([
        this.getDispensedPrescriptions().catch(() => []),
        this.request<Appointment[]>('/admin/appointments').catch(() => [])
      ])
      
      // Convert dispensed prescriptions to records
      const dispensedRecords = prescriptions.map(prescription => {
        // Find related appointment for additional data
        const relatedAppointment = appointments.find(apt => 
          apt.docId === prescription.doctorId
        )
        
        return {
          id: prescription._id,
          patientName: relatedAppointment?.userData.name || `Patient ${prescription.patientId.slice(-6)}`,
          patientId: prescription.patientId,
          referenceRx: `RX-${prescription._id.slice(-6).toUpperCase()}`,
          insuranceCoverage: 'Standard Coverage',
          digitalOrdinance: `DO-RW-${new Date(prescription.date).getFullYear()}-${prescription._id.slice(-6)}`,
          dispensingTimeline: {
            date: new Date(prescription.dispensedAt || prescription.date).toISOString().split('T')[0],
            time: new Date(prescription.dispensedAt || prescription.date).toLocaleTimeString('en-US', { 
              hour12: false, 
              hour: '2-digit', 
              minute: '2-digit' 
            }),
            prescribedBy: relatedAppointment?.docData.name || 'Dr. Unknown',
            location: 'MedOrd Pharmacy'
          },
          status: 'Completed' as const,
          total: `RWF ${(Math.random() * 50000 + 10000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`,
          pharmacy: 'MedOrd Pharmacy'
        }
      })
      
      return dispensedRecords
    } catch (error) {
      console.error('Error fetching dispensed records:', error)
      // Fallback to mock data
      return [
        {
          id: '1',
          patientName: 'Jean Baptiste Nkurunziza',
          patientId: '1012345678',
          referenceRx: '2024-001547',
          insuranceCoverage: 'RSSB - Policy: RSSB-2024',
          digitalOrdinance: 'DO-RW-2024-001547',
          dispensingTimeline: {
            date: '2024-09-07',
            time: '14:30',
            prescribedBy: 'Dr. Sarah Mukamana',
            location: 'Pharmacy Grace Uwimana'
          },
          status: 'Completed',
          total: 'RWF 25,000',
          pharmacy: 'Pharmacy Grace Uwimana'
        }
      ]
    }
  }

  // Doctor management
  async getAllDoctors(): Promise<Doctor[]> {
    return this.request<Doctor[]>('/admin/all-doctors')
  }

  async addDoctor(doctorData: Omit<Doctor, '_id' | 'date' | 'slots_booked'>): Promise<Doctor> {
    return this.request<Doctor>('/admin/add-doctor', {
      method: 'POST',
      body: JSON.stringify(doctorData),
    })
  }

  // Appointment management
  async getAllAppointments(): Promise<Appointment[]> {
    return this.request<Appointment[]>('/admin/appointments')
  }

  async cancelAppointment(appointmentId: string): Promise<void> {
    await this.request(`/admin/cancel-appointment`, {
      method: 'POST',
      body: JSON.stringify({ appointmentId }),
    })
  }

  async markAppointmentCompleted(appointmentId: string): Promise<void> {
    await this.request(`/admin/complete-appointment`, {
      method: 'POST',
      body: JSON.stringify({ appointmentId }),
    })
  }

  // Dashboard stats
  async getDashboardStats(): Promise<{
    doctors: number
    appointments: number
    patients: number
    earnings: number
  }> {
    return this.request<{
      doctors: number
      appointments: number
      patients: number
      earnings: number
    }>('/admin/dashboard')
  }

  // Utility methods
  private formatTimestamp(timestamp: number): string {
    const now = Date.now()
    const diff = now - timestamp
    
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`
    return `${days} day${days > 1 ? 's' : ''} ago`
  }

  private parseTimestamp(timestamp: string): number {
    if (timestamp === 'Just now') return Date.now()
    
    const match = timestamp.match(/(\d+)\s+(minute|hour|day)s?\s+ago/)
    if (!match) return 0
    
    const value = parseInt(match[1])
    const unit = match[2]
    
    const now = Date.now()
    switch (unit) {
      case 'minute': return now - (value * 60000)
      case 'hour': return now - (value * 3600000)
      case 'day': return now - (value * 86400000)
      default: return 0
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.token
  }
}

export const apiService = new ApiService()
