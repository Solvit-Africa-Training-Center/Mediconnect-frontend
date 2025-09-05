

const AboutSection = () => {

  return (
    <section className="py-10 bg-background">
      <div className="flex flex-col h-fit text-center bg-background-blue items-center place-content-center">
        <h1 className=" text-white text-3xl p-10 ">Ready to get Started</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto text-center mb-12">
          Start your journey with paperless, secure medical prescriptions by joinning thousands
          of doctors, patients, and pharmacists transforming healthcare in Rwanda
          Get Started
        </p>
        <button className="bg-background text-primary px-8 py-3 rounded flex items-center gap-2 mb-10">Get started</button>
      </div>
      <div className="flex flex-col bg-white">
        <h1 className="text-3xl text-center p-5">What We Do</h1>
        <div className="flex flex-col gap-2 px-5 sm:px-10 md:px-20 lg:px-30">
          <h1 className="text-blue-500 font-medium">
            Simplify Access to Medical Records
          </h1> 
          <p className="w-sm text-foreground">
            Patients can securely access their historical medical records, including past diagnoses,
            prescriptions, and treating doctors.
            A simple email + OTP verification process makes records available on demand, supporting better follow-up care and transparency in treatment history
          </p>
        </div>
        <div className="flex flex-col place-items-end gap-4 px-5 sm:px-10 md:px-20 lg:px-30">
          <h1 className="text-blue-500 font-medium w-fit pr-32">
            Simplify Access to Medical Records
          </h1>
          <p className="w-sm text-foreground">
            Patients can securely access their historical medical records, including past diagnoses,
            prescriptions, and treating doctors.
            A simple email + OTP verification process makes records available on demand, supporting better follow-up care and transparency in treatment history
          </p>
        </div>
        <div className="flex flex-col gap-2 px-5 sm:px-10 md:px-20 lg:px-30">
          <h1 className="text-blue-500 font-medium">
            Simplify Access to Medical Records
          </h1>
          <p className="w-sm text-foreground">
            Patients can securely access their historical medical records, including past diagnoses,
            prescriptions, and treating doctors.
            A simple email + OTP verification process makes records available on demand, supporting better follow-up care and transparency in treatment history
          </p>
        </div>
        <div className="flex flex-col h-fit mt-20 text-center bg-background items-center place-content-center py-16">
          <h1 className="text-background-blue text-3xl mb-4">Join Our Newsletter</h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto text-center mb-8">
            Sign to our NEWSLETTER and be first to know about any of our new features
          </p>
          <div className="relative w-full max-w-md mx-auto mb-10">
            <input
              type="email"
              placeholder="Email here"
              className="w-full h-10 px-4 pr-32 border-2 bg-white border-gray-300 rounded-4xl focus:border-blue-500 focus:outline-none"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-background-blue text-white px-6 py-2 rounded-4xl hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
            <div className="h-60 bg-background-blue w-screen">
            <div className="text-white flex-stary">
              <h1>home</h1>
              <h1>home</h1>
              <h1>home</h1>
              <h1>home</h1>

            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection