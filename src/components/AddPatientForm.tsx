"use client"

import { useState, useEffect } from "react"
import { Plus, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "./ui/button"
import Input from "./Input"
import { Label } from "./ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { useRegisterPatientMutation } from "@/Back-end/authentication/authenticationApi"

const initialFormState = {
  email: "",
  password: "",
  fullName: "",
  dateOfBirth: "",
  phone: "",
  emergencyContact: "",
  emergencyPhone: "",
  gender: "",
  insuranceProvider: "",
  insuranceNumber: "",
  existingConditions: "",
  allergies: "",
}

type FormState = typeof initialFormState

export default function AddPatientForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState)

  const [registerPatient, { isLoading, isSuccess, isError }] = useRegisterPatientMutation()
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    if (isSuccess) {
      setFormData(initialFormState)
    }
  }, [isSuccess])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError(null)

    const payload = {
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      dateOfBirth: formData.dateOfBirth,
      phone: formData.phone,
      emergencyContact: formData.emergencyContact,
      emergencyPhone: formData.emergencyPhone,
      gender: formData.gender,
      insuranceProvider: formData.insuranceProvider,
      insuranceNumber: formData.insuranceNumber,
      allergies: formData.allergies ? formData.allergies.split(",").map((a) => a.trim()) : [],
      existingConditions: formData.existingConditions
        ? formData.existingConditions.split(",").map((c) => c.trim())
        : [],
    }

    try {
      await registerPatient(payload).unwrap()
    } catch (err: any) {
      const serverMessage =
        typeof err?.data === "string"
          ? err.data
          : err?.data?.message || JSON.stringify(err?.data) || "An unknown error occurred."
      setFormError(serverMessage)
    }
  }

  const inputClassName =
    "w-full rounded-lg border border-[#D3D9DE] bg-[#F8F9FC] px-3 py-2 text-sm text-[#131A20] transition focus:border-[#0C7AE9] focus:outline-none focus:ring-2 focus:ring-[#0C7AE9]"
  const labelClassName = "mb-2 block text-sm font-medium text-[#29333D]"

  return (
    <Card className="rounded-3xl border border-[#E4E9EF] bg-white shadow-md">
      <CardHeader className="space-y-4 border-b border-[#E4E9EF] pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold text-[#131A20]">
              Add New Patient
            </CardTitle>
            <CardDescription className="text-sm text-[#29333D]">
              Fill in the personal, contact, and medical details to register a patient.
            </CardDescription>
          </div>
          <span className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#E8F2FF] text-[#0C7AE9] sm:flex">
            <Plus className="h-5 w-5" />
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {isSuccess && (
          <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            <CheckCircle className="h-5 w-5" />
            <span>Patient added successfully.</span>
          </div>
        )}

        {(isError || formError) && (
          <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertTriangle className="h-5 w-5" />
            <span>{formError || "Failed to add patient."}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <section className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#131A20]">Personal Information</h3>
              <p className="text-sm text-[#29333D] opacity-70">
                Primary details used to identify the patient.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label className={labelClassName}>Email</Label>
                <Input
                  type="email"
                  placeholder="patient@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Full Name</Label>
                <Input
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Date of Birth</Label>
                <Input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Phone Number</Label>
                <Input
                  placeholder="078xxxxxxx"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Gender</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
                >
                  <SelectTrigger className={inputClassName}>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#131A20]">Emergency & Insurance</h3>
              <p className="text-sm text-[#29333D] opacity-70">
                Contact information for emergencies and insurance coverage.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label className={labelClassName}>Emergency Contact</Label>
                <Input
                  placeholder="Jane Doe"
                  value={formData.emergencyContact}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, emergencyContact: e.target.value }))
                  }
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Emergency Phone</Label>
                <Input
                  placeholder="078xxxxxxx"
                  value={formData.emergencyPhone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, emergencyPhone: e.target.value }))
                  }
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Insurance Provider</Label>
                <Input
                  placeholder="RSSB"
                  value={formData.insuranceProvider}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, insuranceProvider: e.target.value }))
                  }
                  className={inputClassName}
                />
              </div>
              <div>
                <Label className={labelClassName}>Insurance Number</Label>
                <Input
                  placeholder="5489-000-1234"
                  value={formData.insuranceNumber}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, insuranceNumber: e.target.value }))
                  }
                  className={inputClassName}
                />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#131A20]">Medical Notes</h3>
              <p className="text-sm text-[#29333D] opacity-70">
                Summaries help clinicians prepare for future visits.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label className={labelClassName}>Existing Conditions (comma-separated)</Label>
                <Textarea
                  placeholder="Diabetes, Hypertension"
                  value={formData.existingConditions}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, existingConditions: e.target.value }))
                  }
                  className="min-h-[120px] rounded-lg border border-[#D3D9DE] bg-[#F8F9FC] text-sm text-[#131A20] focus:border-[#0C7AE9] focus:outline-none focus:ring-2 focus:ring-[#0C7AE9]"
                />
              </div>
              <div>
                <Label className={labelClassName}>Allergies (comma-separated)</Label>
                <Textarea
                  placeholder="Penicillin, Ibuprofen"
                  value={formData.allergies}
                  onChange={(e) => setFormData((prev) => ({ ...prev, allergies: e.target.value }))}
                  className="min-h-[120px] rounded-lg border border-[#D3D9DE] bg-[#F8F9FC] text-sm text-[#131A20] focus:border-[#0C7AE9] focus:outline-none focus:ring-2 focus:ring-[#0C7AE9]"
                />
              </div>
            </div>
          </section>

          <div className="flex items-center justify-end gap-3 border-t border-dashed border-[#E4E9EF] pt-6">
            <Button
              type="submit"
              disabled={isLoading}
              className="rounded-lg bg-[#0C7AE9] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a66c2] disabled:opacity-70"
            >
              {isLoading ? "Saving..." : "Add Patient"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}