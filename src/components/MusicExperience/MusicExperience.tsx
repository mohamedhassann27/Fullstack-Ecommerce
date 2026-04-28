import { Button } from "../ui/button"
import CountDownTimer from "./CountDownTimer"
import musicImg from "../../assets/music.webp"

function MusicExperience() {
    return (
        <section data-aos="fade-up" data-aos-duration="700" className="bg-[#0a0a0a] text-white flex max-md:flex-col max-md:gap-10 justify-between border-b items-center max-md:py-10!">

            <div className="px-5 lg:px-12 flex flex-col gap-8 w-full max-md:items-center">
                <p data-aos="fade-right" className="text-[#00FF66] max-md:-mb-2">Categories</p>
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-5xl  font-semibold max-md:text-3xl max-md:text-center">Enhance Your <br /> Music Experience</h2>
                <div data-aos="zoom-in" data-aos-delay="200">
                    <CountDownTimer/>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <Button className="bg-[#00FF66] w-fit py-6 px-10 cursor-pointer rounded-sm">Buy Now!</Button>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="800" className="px-5 lg:px-12 w-full">
                <img src={musicImg} loading='lazy' alt="music img" className="h-full object-cover"/>
            </div>

        </section>
    )
}

export default MusicExperience
