"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselSwiperProps {
    showTexts?: boolean
}

const CarouselSwiper = ({ showTexts = true }: CarouselSwiperProps) => {
    return (
        <div>
            <Swiper
                slidesPerView={"auto"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                centeredSlides={false}
                pagination={{ clickable: true }}
                navigation={true}
                className="mySwiper h-[500]"
            >
                <SwiperSlide className='relative !w-[90%]'>
                    <Image src="/homestaging.jpg" height={300} width={300} className='w-full h-full' alt='home staging' />
                    <div className="absolute inset-0 bg-black/30"></div>
                    {showTexts &&
                        <h1 className='absolute text-[25px] md:text-[40px] text-white font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>Transform empty properties into inviting homes</h1>
                    }
                </SwiperSlide>
                <SwiperSlide className='relative !w-[90%]'>
                    <Image src="/gallery-office.jpg" height={300} width={300} className='w-full h-full' alt='office' />
                    <div className="absolute inset-0 bg-black/30"></div>
                    {showTexts &&
                        <h1 className='absolute text-[25px] md:text-[40px] text-white font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>We offer best Virtual staging services</h1>
                    }
                </SwiperSlide>
                <SwiperSlide className='relative !w-[90%]'>
                    <Image src="/gallery-living.jpg" height={300} width={300} className='w-full h-full' alt='living' />
                    <div className="absolute inset-0 bg-black/30"></div>
                    {showTexts &&
                        <h1 className='absolute text-[25px] md:text-[40px] text-white font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>Use high-end 3D rendering</h1>
                    }
                </SwiperSlide>
                <SwiperSlide className='relative !w-[90%]'>
                    <Image src="/bedroom.jpg" height={300} width={300} className='w-full h-full' alt='bedroom' />
                    <div className="absolute inset-0 bg-black/30"></div>
                    {showTexts &&
                        <h1 className='absolute text-[25px] md:text-[40px] text-white font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>Add Stylish Photorealistic furniture to your vacant listing</h1>
                    }
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CarouselSwiper