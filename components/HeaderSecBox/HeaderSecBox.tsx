import React from 'react';
import {HeaderItems} from "@/components/HeaderItems/HeaderItems";

interface Box {
    Title:string,
    isOpen:boolean
}

export const HeaderSecBox = ({Title,isOpen}:Box) => {
    return(
        <article className={isOpen?'HeaderSecBox':'HeaderSecBox2'}>
            <h2 className='text-6xl font-bold z-10'>{Title}</h2>
            <div className='absolute Anim1 left-[100px] top-[250px] z-0'>
                <h1 className='text-orange-400 text-9xl font-bold'>We Stop</h1>
                <h2 className=' text-8xl font-light text-white'>Cyber Threats</h2>
            </div>
            <img
                src='https://s8.uupload.ir/files/images_64u.jpg'
                 className='absolute w-[15rem] right-[350px] top-[250px] Anim2 z-0'/>

            <div className='w-[100%] h-max flex items-center gap-[30rem]'>
                <div className='m-10 z-10 flex flex-col gap-4'>
                    <h3 className='font-bold pb-2 border-b border-orange-400 w-[5rem]'>TIPS</h3>
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                </div>
                <div className='m-10 z-10 flex flex-col gap-4'>
                    <h3 className='font-bold pb-2 border-b border-orange-400 w-[5rem]'>TIPS</h3>
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />
                    <HeaderItems />

                </div>
            </div>
        </article>
    )
}