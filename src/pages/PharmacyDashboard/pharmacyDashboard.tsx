import Footer from "../../components/Footer"
import PortalsSection from "../../components/PortalsSection"
const PharmacyDashboard = () => {
    return (
        <div>
            <div className="bg-[url('/patientphoto.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full flex flex-col justify-center">
                <div className="bg-black/60 h-screen flex flex-col justify-center gap-10">
                <h1 className="text-7xl text-white/95">
                    A Secure Digital
                    Space for  <br /> Your Health Information
                </h1>
                <article className="text-3xl text-white/80">
                    Empowering patients in Rwanda with
                    secure, accessible <br></br> healthcare technology
                </article>
                <div>
                <button className="bg-background-blue text-white px-5 py-4 rounded">Access Patient Dashboard</button>
                </div>
                </div>
            </div>
            <div className="h-screen flex flex-col">
                <h1 className="text-5xl text-center mt-20 mb-10">Health at Your Fingertips</h1>
                <p className="text-center">
                    Experience modern healthcare management designed specifically for Rwanda's
                    healthcare ecosystem
                </p>

            </div>
            <PortalsSection />
            <Footer/>




        </div>
    )
}

export default PharmacyDashboard