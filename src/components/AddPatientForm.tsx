import { useState } from "react"
import { useRegisterPatientMutation } from "../Back-end/patient/patientApi"
import * as Yup from "yup"

const AddPatientForm = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", dateOfBirth: "", phone: "" })
  const [registerPatient, { isLoading }] = useRegisterPatientMutation()

  const schema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    dateOfBirth: Yup.date().required("Date of birth is required"),
    phone: Yup.string().matches(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await schema.validate(formData, { abortEarly: false })
      await registerPatient(formData).unwrap()
      alert("Patient registered successfully!")
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        alert(error.errors.join("\n"))
      } else {
        alert("Failed to register patient.")
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullName" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
      <input name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <button type="submit" disabled={isLoading}>Register</button>
    </form>
  )
}

export default AddPatientForm