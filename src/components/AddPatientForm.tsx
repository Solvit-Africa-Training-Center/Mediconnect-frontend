"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import Input from "./Input"
import { Label } from "./ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Plus, CheckCircle, AlertTriangle } from "lucide-react"
import { useRegisterPatientMutation } from "@/Back-end/authentication/authenticationApi"

export default function AddPatientForm() {
  const [formData, setFormData] = useState({
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
  })

  const [registerPatient, { isLoading, isSuccess, isError, error }] = useRegisterPatientMutation()
  const [formError, setFormError] = useState<string | null>(null)

  useEffect(() => {
    if (isSuccess) {
      setFormData({
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
      })
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
      allergies: formData.allergies ? formData.allergies.split(",").map(a => a.trim()) : [],
      existingConditions: formData.existingConditions
        ? formData.existingConditions.split(",").map(c => c.trim())
        : [],
    }

    try {
      await registerPatient(payload).unwrap()
    } catch (err: any) {
      // Convert error object to string to avoid React child errors
      const serverMessage =
        typeof err?.data === "string"
          ? err.data
          : err?.data?.message || JSON.stringify(err?.data) || "An unknown error occurred."
      setFormError(serverMessage)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl font-medium">Add New Patient</CardTitle>
          <CardDescription>Fill in the personal and medical information of the patient.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {isSuccess && (
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
              <CheckCircle className="w-5 h-5" />
              <span>Patient added successfully!</span>
            </div>
          )}

          {(isError || formError) && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
              <AlertTriangle className="w-5 h-5" />
              <span>{formError || "Failed to add patient."}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-medium mb-4">
                Personal Information <Plus className="w-4 h-4 text-blue-600" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    placeholder="patient@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Full Name</Label>
                  <Input
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Date of Birth</Label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input
                    placeholder="078xxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Emergency Contact</Label>
                  <Input
                    placeholder="Jane Doe"
                    value={formData.emergencyContact}
                    onChange={(e) => setFormData(prev => ({ ...prev, emergencyContact: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Emergency Phone</Label>
                  <Input
                    placeholder="078xxxxxxx"
                    value={formData.emergencyPhone}
                    onChange={(e) => setFormData(prev => ({ ...prev, emergencyPhone: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <Select value={formData.gender} onValueChange={(v) => setFormData(prev => ({ ...prev, gender: v }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Insurance Provider</Label>
                  <Input
                    placeholder="RSSB"
                    value={formData.insuranceProvider}
                    onChange={(e) => setFormData(prev => ({ ...prev, insuranceProvider: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Insurance Number</Label>
                  <Input
                    placeholder="5489-000-1234"
                    value={formData.insuranceNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, insuranceNumber: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            {/* Medical Info */}
            <div>
              <h3 className="flex items-center gap-2 text-lg font-medium mb-4">
                Medical Information <Plus className="w-4 h-4 text-blue-600" />
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Existing Conditions (comma-separated)</Label>
                  <Textarea
                    placeholder="Diabetes, Hypertension"
                    value={formData.existingConditions}
                    onChange={(e) => setFormData(prev => ({ ...prev, existingConditions: e.target.value }))}
                  />
                </div>
                <div>
                  <Label>Allergies (comma-separated)</Label>
                  <Textarea
                    placeholder="Penicillin, Ibuprofen"
                    value={formData.allergies}
                    onChange={(e) => setFormData(prev => ({ ...prev, allergies: e.target.value }))}
                  />
                </div>
              </div>
            </div>

            <div className="flex text-center bg-blue-400 text-blue-400">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Add Patient"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
