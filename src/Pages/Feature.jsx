import { FeatureCard } from "../components/Feature/FeatureCard"


function Feature() {
    return (
        <div className='h-full w-full flex items-center justify-center bg-black flex-col gap-20 '>
            <h1 className='text-5xl text-white'>From Feature Page</h1>
            <div className="flex gap-5  ">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>

        </div>
    )
}

export default Feature