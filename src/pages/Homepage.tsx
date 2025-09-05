import AboutSection from "../components/AboutSection"
import EcosystemSection from "../components/EcosystemSection"
import Header from "../components/Header"
import HeroSection from "../components/Herosection"
import PortalsSection from "../components/PortalsSection"

const Homepage = () => {
    return (
        <div className="h-full">
            <Header/>
            <HeroSection/>
            <EcosystemSection/>
            <PortalsSection/>
            <AboutSection/>
        </div>
    )
}

export default Homepage