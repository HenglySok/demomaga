import Carousel from "../components/Carousel"
import { FeatureCard } from "../components/Feature/FeatureCard"


function Feature() {
    return (
        <div className='h-full w-full flex items-center justify-center bg-black flex-col gap-20 overflow-hidden'>
            <h1 className='text-5xl text-white'>From Feature Page</h1>
            <FeatureCard />
            <Carousel />
        </div>
    )
}

export default Feature