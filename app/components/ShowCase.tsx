"use client"

import AnimatedSection from './AnimatedSection'
import CarouselSwiper from './CarouselSwiper'
import HeroSection from './CarouselSwiper'

const ShowCase = () => {
    return (
        <section className="section-padding bg-warm">
            <div className="container-wide">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-8">Why Stage with Real Estate Staging Pro? </p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                            <div className='bg-primary/40 flex flex-col items-center justify-center gap-6 p-6'>
                                <p className='text-2xl font-extrabold text-accent uppercase'>Home staging = Top Dollars sales!</p>
                                <p className='text-xl font-extrabold text-accent'>Hire our Certified Home Stagers!</p>
                                <button className='btn-outline'>Staging Gallery</button>
                            </div>
                            <div>
                                <CarouselSwiper showTexts={false} />
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>

    )
}

export default ShowCase