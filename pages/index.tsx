import {HeaderBTN} from "@/components/HeaderBTN/HeaderBTN";
import {useState} from "react";
import React,{useRef,useEffect} from 'react'
import ProgressBar from 'react-customizable-progressbar'
import {Cards} from "@/components/Cards/Cards";
import {Tooltip} from "@mui/material";
import {MapDeatails} from "@/components/MapDetails/MapDeatails";
import {NewsCards} from "@/components/NewsCards/NewsCards";
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import LightSpeed from 'react-reveal/LightSpeed'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {HeaderSecBox} from "@/components/HeaderSecBox/HeaderSecBox";

export default function Home() {

    const [active,setActive] = useState<string>('MSS')
    const [isOpen,setIsOpen] = useState<boolean>(false)
    const [headTitle,setHeadTitle] = useState<string>('')
    const [progress,setProgress] = useState<number>(20)


    const setTitle = (Title:string):any => {
        setHeadTitle(Title)
        setIsOpen(!isOpen)
    }

  return (
    <main className='w-[100%] h-max bg-[#0A1118]'>
        <header className='w-[100%] h-16 p-4 bg-[#FFF] flex items-center justify-around'>
            <img src='https://s8.uupload.ir/files/download_v4w4.png' className='w-[15%]' crossOrigin='anonymous'/>
            <div className='flex items-center gap-5 justify-center'>
                <HeaderBTN Title={'Products'} SetTitle={setTitle} />
                <HeaderBTN Title={'Support'} SetTitle={setTitle} />
                <HeaderBTN Title={'Items'} SetTitle={setTitle} />
            </div>
            <button
                className='w-[15%] border border-red-600 text-red-600 p-2 rounded-md rounded-br-2xl cursor-pointer
                    hover:text-white hover:bg-red-600 transition-all'>
                Call +99999988888
            </button>
        </header>
            <HeaderSecBox Title={headTitle} isOpen={isOpen} />
        <div className='w-max absolute left-[200px] h-max  p-12'>
            <div className='bg-[#EA6333] opacity-30 w-[30rem] h-[12rem]  rounded-full
             blur blur-3xl shadow-inner'></div>
        </div>
        <div className='flex flex-col gap-48 pt-8'>
           <Fade left>
               <article className=' w-[100%] h-max flex flex-col gap-8 justify-center items-center secAnim1 relative'>
                   <div className='text-5xl font-semibold '>
                       <p>POLAR BEER CYBER SECURITY GROUP</p>
                   </div>
                   <h3 className='text-2xl font-light'>We Provide Business-Driven Cyber Security Solution and Services</h3>
                   <div className='w-[32rem] rounded-xl border-2 border-orange-400 vids relative'>
                       <div className='rounded-full w-[2.5rem] h-[2.5rem] border border-orange-400 hover:bg-orange-500
                cursor-pointer flex items-center justify-center absolute top-[45%] left-[45%] '>
                           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                className="bi bi-play-fill text-orange-400" viewBox="0 0 16 16">
                               <path
                                   d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                           </svg>
                       </div>
                   </div>
                   <p className='text-center w-[60rem]'>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                       dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
                       rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis.
                       Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
                       faucibus et molestie ac feugiat sed lectus
                   </p>
               </article>
           </Fade>
            <Zoom>
                <article className='mt-30 w-[100%] h-max flex justify-around items-center secAnim2 p-2'>

                    <div className='flex flex-col gap-8'>
                        <h1 className='text-5xl font-semibold '>Polar siem</h1>
                        <p className='w-[30rem]'>
                            Securing data with a wide range of unintegrated security solutions causes a large volume of
                            security reports exclusive to each, a high volume of produced alerts
                        </p>
                        <button
                            className='w-[15rem] border border-red-600 text-red-600 p-2 rounded-md rounded-br-2xl cursor-pointer
                    hover:text-white hover:bg-red-600 transition-all'>
                            View our products
                        </button>
                    </div>
                    <div className='relative flex items-start gap-2 w-[30%]'>
                        <div className='w-[100%] p-12 absolute left-[-175px] top-[-150px]'>
                            <div className='bg-[#EA6333] opacity-30 w-[25rem] h-[25rem]  rounded-full
             blur blur-3xl shadow-inner'></div>
                        </div>
                        <div className='reletive w-[50%]'>
                            <div className={`${active=='Pentest'?'top-[-120px] scale-125':'top-0 scale-100'}
                        left-0 z-50  w-[10rem] h-[10rem] rounded-xl skew-x-2 skew-y-12
                            absolute bg-[#0A1118]  flex items-center justify-center transition-all`}>
                                <p>Pentest</p>
                            </div>
                            <div className={`${active=='Seim'?'top-[-120px] scale-125':'top-0 scale-100'}
                        left-10 z-40 scale-100 w-[10rem] h-[10rem] bg-orange-300 rounded-xl skew-x-2 skew-y-12
                            absolute  scale-100 flex items-center  justify-center transition-all`}>
                                <p>Seim</p>
                            </div>
                            <div className={`${active=='MSS'?'top-[-120px] scale-125':'top-0 scale-100'}
                        left-20 z-30 scale-100 w-[10rem] h-[10rem] bg-orange-600 rounded-xl skew-x-2 skew-y-12
                            absolute  flex items-center justify-center transition-all`}>
                                <p>MSS</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-start w-[50%]'>
                            <div
                                onClick={()=> setActive('Pentest')}
                                className='flex items-center gap-2 cursor-pointer hover:text-orange-400 p-1 hover:border-b
                             border-b-orange-600'>
                                <div className={active=='Pentest'?'w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full':'hidden'}></div>
                                <p>Pentest</p>
                            </div>
                            <div
                                onClick={()=> setActive('Seim')}
                                className='flex items-center gap-2 cursor-pointer hover:text-orange-400 p-1 hover:border-b
                             border-b-orange-600'>
                                <div className={active=='Seim'?'w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full':'hidden'}></div>
                                <p>Seim</p>
                            </div>
                            <div
                                onClick={()=> setActive('MSS')}
                                className='flex items-center gap-2 cursor-pointer hover:text-orange-400 p-1 hover:border-b
                             border-b-orange-600'>
                                <div className={active=='MSS'?'w-[0.5rem] h-[0.5rem] bg-orange-500 rounded-full':'hidden'}></div>
                                <p>MSS</p>
                            </div>
                        </div>
                    </div>
                </article>
            </Zoom>
            <Fade>
                <article className=' w-[100%] h-max flex flex-col gap-8 justify-center items-center secAnim3 relative'>
                    <div className='text-5xl font-semibold '>
                        <p>Polar services</p>
                    </div>
                    <div className='w-max absolute left-[200px] h-max  p-12'>
                        <div className='bg-[#EA6333] opacity-30 w-[30rem] h-[12rem]  rounded-full
             blur blur-3xl shadow-inner'></div>
                    </div>
                    <div className='w-max absolute top-[200px] right-[200px] h-max  p-12'>
                        <div className='bg-[#EA6333] opacity-30 w-[30rem] h-[12rem]  rounded-full
             blur blur-3xl shadow-inner'></div>
                    </div>
                    <div className='absolute top-[110px] w-[11rem] h-[11rem] rounded-[50%] border border-gray-700 bg-[#0A1118]'/>
                    <div className='absolute top-[125px] w-[9rem] h-[9rem] rounded-[50%] border border-gray-700 bg-[#0A1118]'/>
                    <div className='absolute top-[105px] right-[688px]  rotate-[40deg] z-50 w-[0.1rem] h-[1.3rem] rounded-[50%]
                 bg-orange-600'/>
                    <div className='absolute top-[165px] right-[650px]  rotate-[80deg] z-50 w-[0.1rem] h-[1.3rem] rounded-[50%]
                 bg-orange-600'/>
                    <p className='absolute z-50 top-[80px] right-[620px] cursor-pointer hover:text-orange-400'
                       onClick={()=>setProgress(66)}>Polar MMS</p>
                    <p className='absolute z-50 top-[150px] right-[490px] cursor-pointer hover:text-orange-400'
                       onClick={()=>setProgress(81)}>Polar MMS PREMIUM</p>
                    <p className='absolute z-50 top-[225px] left-[618px] cursor-pointer hover:text-orange-400'
                       onClick={()=>setProgress(5)}>MIN</p>
                    <p className='absolute z-50 top-[225px] right-[618px] cursor-pointer hover:text-orange-400'
                       onClick={()=>setProgress(100)}>MAX</p>
                    <div className={progress===66?`w-[12rem] Anim1 absolute z-50 top-[70px] right-[420px] cursor-pointer p-2
                    border-b-2 border-dashed border-gray-600`:'hidden'}>
                        lorem lorem lorem lorem lorem
                    </div>
                    <div className={progress===81?`w-[12rem] Anim2 absolute z-50 top-[140px] right-[290px] cursor-pointer p-2
                    border-b-2 border-dashed border-orange-600`:'hidden'}>
                        lorem lorem lorem lorem lorem
                    </div>
                    <ProgressBar
                        radius={100}
                        progress={progress}
                        trackStrokeColor='#2c2b2b'
                        strokeWidth={6}
                        strokeColor="#FF8C00FF"
                        strokeLinecap="round"
                        trackStrokeWidth={5}
                        trackStrokeLinecap="butt"
                        cut={120}
                        rotate={-210}
                    />
                </article>
            </Fade>
                <article className=' w-[100%] h-max flex flex-col gap-8 pl-36 secAnim1 relative'>

                    <div className='text-5xl font-semibold '>
                        <p>Why Choosing Us</p>
                    </div>
                    <h3 className='text-2xl w-[50rem] font-light'>
                        Throughout all the years of providing security services, the reasons why we have been chosen by
                        our customers have been
                    </h3>
                    <div className=' w-[100%] h-max flex gap-8 '>
                        <div className='absolute top-[210px] left-[95px] w-[17rem] h-[17rem] rounded-[50%] border border-4
                    border-dotted border-gray-700 bg-[#0A1118] animate-spin'/>
                        <div className='absolute top-[225px] left-[110px] w-[15rem] h-[15rem] rounded-[50%] border
                     border-gray-700 bg-[#0A1118]'/>
                        <div className='absolute top-[240px] left-[128px] w-[13rem] h-[13rem] rounded-[50%] border border-2
                     border-dashed border-orange-700 bg-[#0A1118] animate-pulse'/>
                        <div className='w-[100%] h-max  p-12'>
                            <div className='bg-[#EA6333] opacity-30 w-[30rem] h-[12rem] absolute right-[275px] rounded-full
             blur blur-3xl shadow-inner'></div>
                        </div>
                        <p className='w-[35rem] absolute top-[260px] right-[528px]'>
                            Delivering services according to size of all companies ranging from SMBs to Enterprise
                            Delivering consultation on choosing the proper security service
                            Professional personnel holding up-to-date certificates in fields of specialization
                            24*7 support
                            Delivering services according to requested SLA
                            Previous invaluable experience in Enterprise Security Service Projects

                        </p>
                    </div>

                </article>
            <LightSpeed>
                <article className=' w-[100%] h-max flex flex-col gap-8 mt-32 justify-center items-center secAnim1 relative'>

                    <div className='text-5xl font-semibold '>
                        <p>They TRUST Us</p>
                    </div>
                    <div className='w-full pl-36'>
                        <Swiper
                            spaceBetween={5}
                            slidesPerView={4}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            <SwiperSlide>
                                <Cards Title='Adidas' Img='https://s8.uupload.ir/files/vecteezy_adidas-logo-transparent-png_21671845_382_i1o5.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards Title='Adidas' Img='https://s8.uupload.ir/files/vecteezy_adidas-logo-transparent-png_21671845_382_i1o5.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards Title='LV' Img='https://s8.uupload.ir/files/louis_vuitton_logo_and_wordmark.svg_oxoa.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards Title='LV' Img='https://s8.uupload.ir/files/louis_vuitton_logo_and_wordmark.svg_oxoa.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards Title='Benz' Img='https://s8.uupload.ir/files/mercedes-logo.svg_lbp2.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Cards Title='Benz' Img='https://s8.uupload.ir/files/mercedes-logo.svg_lbp2.png' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </article>
            </LightSpeed>
            <Zoom>
                <article className=' w-[100%] h-max flex flex-col gap-8 justify-center items-center secAnim3 relative'>

                    <div className='text-5xl font-semibold '>
                        <p>Teamwork and intelligence win championships!</p>
                    </div>
                    <div className='relative p-2'>
                        <img src='https://s8.uupload.ir/files/1280px-world_map_with_points.svg_7hg3.png'
                             className='z-10'/>
                        <Tooltip title='NewYork'>
                            <div className='w-[0.75rem] h-[0.75rem] z-20 absolute top-[180px] left-[292px] rounded-full bg-gray-600
                        cursor-pointer hover:bg-orange-500 animate-pulse'></div>
                        </Tooltip>
                        <Tooltip title='City 3'>
                            <div className='w-[0.75rem] h-[0.75rem] z-20 absolute top-[105px] left-[622px] rounded-full bg-gray-600
                        cursor-pointer hover:bg-orange-500 animate-pulse'></div>
                        </Tooltip>
                        <Tooltip title='Tehran'>
                            <div className='w-[0.75rem] h-[0.75rem] z-20 absolute top-[210px] right-[500px] rounded-full bg-gray-600
                        cursor-pointer hover:bg-orange-500 animate-pulse'></div>
                        </Tooltip>
                        <div className='w-full absolute flex items-center justify-around bottom-[100px]'>
                            <MapDeatails Num='14' Det='Test Test' />
                            <MapDeatails Num='20' Det='Test Test' />
                            <MapDeatails Num='8' Det='Test Test' />
                            <MapDeatails Num='10' Det='Test Test' />
                        </div>
                    </div>

                </article>
            </Zoom>

            <article className=' w-[100%] h-max flex flex-col gap-8 justify-center pl-36 secAnim2 relative'>
                <div className='text-5xl font-semibold '>
                    <p>Explore POLAR latest news and insights</p>
                </div>
                <div className='text-3xl font-semibold '>
                    <p>Explore POLAR latest news and insights</p>
                </div>
                <div className='w-full'>
                    <Swiper
                        spaceBetween={5}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <NewsCards Title='Explore POLAR latest news and insights'
                                       Img='https://s8.uupload.ir/files/tcv夜_qojo.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCards Title='Explore POLAR latest news and insights'
                                       Img='https://s8.uupload.ir/files/tcv夜_qojo.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCards Title='Explore POLAR latest news and insights'
                                       Img='https://s8.uupload.ir/files/tcv夜_qojo.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCards Title='Explore POLAR latest news and insights'
                                       Img='https://s8.uupload.ir/files/tcv夜_qojo.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <NewsCards Title='Explore POLAR latest news and insights'
                                       Img='https://s8.uupload.ir/files/tcv夜_qojo.jpg' />
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className='w-max absolute right-0 h-max  p-12'>
                    <div className='bg-[#EA6333] opacity-30 w-[30rem] h-[12rem]  rounded-full
             blur blur-3xl shadow-inner'></div>
                </div>
                <button
                    className='w-[15%] absolute top-[85px] right-[135px] border border-red-600 text-red-600 p-2 rounded-md rounded-br-2xl cursor-pointer
                    hover:text-white hover:bg-red-600 transition-all'>
                    view all news
                </button>
            </article>

            <footer className='w-full flex items-baseline justify-around p-4'>
                <div className='flex flex-col items-center gap-6'>
                    <button
                        className='w-[100%] border border-red-600 bg-gradient-to-l bg-red-500 p-2 rounded-md
                         rounded-br-2xl cursor-pointer hover:text-white hover:bg-red-600 transition-all'>
                        Get In Touch
                    </button>
                    <p className='text-xl font-light'>SUBSCRIBE TO NEWSLETTER</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <h3 className='text-2xl font-bold pb-2 border-b border-b-orange-500'>Explore</h3>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>Products</p>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>Solutions</p>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>Support</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <h3 className='text-2xl font-bold pb-2 border-b border-b-orange-500'>Company</h3>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>About</p>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>News</p>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>Contact</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <h3 className='text-2xl font-bold pb-2 border-b border-b-orange-500'>Locations</h3>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>USA</p>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>Iran</p>
                    <p className='hover:text-orange-400 hover:pl-4 cursor-pointer'>Europe</p>
                </div>
                <div className='flex flex-col items-center gap-6'>
                    <h3 className='text-2xl font-bold pb-2 border-b border-b-orange-500'>Socials</h3>
                    <div className='w-full grid grid-cols-2 gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-telegram cursor-pointer" viewBox="0 0 16 16">
                            <path
                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-instagram cursor-pointer" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-twitter cursor-pointer" viewBox="0 0 16 16">
                            <path
                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                             className="bi bi-linkedin cursor-pointer" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </div>
                </div>
            </footer>
        </div>
    </main>
  )
}
