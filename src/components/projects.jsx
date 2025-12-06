import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
    const projectSummary = "I take pride in developing creative and functional web applications that showcase my skills in front-end and full-stack development. Each project highlights a unique aspect of my expertise, from dynamic, responsive designs to robust back-end functionality. Whether it's creating a portfolio website, a productivity tool, or an engaging user experience, my work is driven by a commitment to innovation and usability. Below are a few of my projects that demonstrate my dedication to crafting effective and user-friendly solutions.";

    return (
        <div className="section-border">
            <div className="section-title">
                <h2>Projects</h2>
            </div>
            <div className="flex items-center justify-around">
                <div className="flex flex-col items-center lg:mb-8 lg:ml-8 text-primary text-[12px] p-10">
                    <p>{projectSummary}</p>
                </div>
                
                <div className="w-96 h-64 bg-gray-800 border-2 border-red-500">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        style={{ width: '100%', height: '100%' }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div className="bg-blue-500 text-white h-full flex items-center justify-center text-2xl">
                                Slide 1
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-red-500 text-white h-full flex items-center justify-center text-2xl">
                                Slide 2
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-green-500 text-white h-full flex items-center justify-center text-2xl">
                                Slide 3
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-yellow-500 text-white h-full flex items-center justify-center text-2xl">
                                Slide 4
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}