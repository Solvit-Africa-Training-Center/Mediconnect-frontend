"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Input from "@/components/Input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export function PatientForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    phoneNumber: "",
    emergencyPhone: "",
    gender: "",
    insuranceProvider: "",
    insuranceNumber: "",
    chronicDiseases: "",
    allergies: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground mb-2">Add New Patient</h1>
        <p className="text-muted-foreground">Register a new patient here</p>
      </div>

      <Card className="bg-card border-border">
        <CardHeader className="pb-6">
          <CardTitle className="text-xl font-medium text-card-foreground">Patient Information</CardTitle>
          <CardDescription className="text-muted-foreground">
            This form will be containing personal information and medical information of patient
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-medium text-card-foreground">Personal information</h3>
                <Plus className="h-4 w-4 text-primary" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium text-card-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="e.g., Raissa Micheline"
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                    className="bg-muted border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm font-medium text-card-foreground">
                    Date of birth
                  </Label>
                  <Input
                    id="dateOfBirth"
                    placeholder="e.g., 11-01-2002"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                    className="bg-muted border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium text-card-foreground">
                    Phone Number
                  </Label>
                  <Input
                    id="phoneNumber"
                    placeholder="e.g., 07845362572"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                    className="bg-muted border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emergencyPhone" className="text-sm font-medium text-card-foreground">
                    Emergency Phone Number
                  </Label>
                  <Input
                    id="emergencyPhone"
                    placeholder="e.g., 0787333755"
                    value={formData.emergencyPhone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, emergencyPhone: e.target.value }))}
                    className="bg-muted border-border placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm font-medium text-card-foreground">
                    Gender
                  </Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
                  >
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="insuranceProvider" className="text-sm font-medium text-card-foreground">
                    Insurance Provider
                  </Label>
                  <Select
                    value={formData.insuranceProvider}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, insuranceProvider: value }))}
                  >
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select Provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="aetna">Aetna</SelectItem>
                      <SelectItem value="bluecross">Blue Cross Blue Shield</SelectItem>
                      <SelectItem value="cigna">Cigna</SelectItem>
                      <SelectItem value="humana">Humana</SelectItem>
                      <SelectItem value="unitedhealth">UnitedHealth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="insuranceNumber" className="text-sm font-medium text-card-foreground">
                  Insurance Number
                </Label>
                <Input
                  id="insuranceNumber"
                  placeholder="e.g., 5489-000-1234-876334"
                  value={formData.insuranceNumber}
                  onChange={(e) => setFormData((prev) => ({ ...prev, insuranceNumber: e.target.value }))}
                  className="bg-muted border-border placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Medical Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-medium text-card-foreground">Medical information</h3>
                <Plus className="h-4 w-4 text-primary" />
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="chronicDiseases" className="text-sm font-medium text-card-foreground">
                    Chronic diseases
                  </Label>
                  <Textarea
                    id="chronicDiseases"
                    placeholder="e.g., Diabetes L2, BP130/20"
                    value={formData.chronicDiseases}
                    onChange={(e) => setFormData((prev) => ({ ...prev, chronicDiseases: e.target.value }))}
                    className="bg-muted border-border placeholder:text-muted-foreground min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies" className="text-sm font-medium text-card-foreground">
                    Allergies
                  </Label>
                  <Textarea
                    id="allergies"
                    placeholder="e.g., Penicillin, Ibuprofen"
                    value={formData.allergies}
                    onChange={(e) => setFormData((prev) => ({ ...prev, allergies: e.target.value }))}
                    className="bg-muted border-border placeholder:text-muted-foreground min-h-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
              >
                Add
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
