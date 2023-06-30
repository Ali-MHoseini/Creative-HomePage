import React from "react";

interface Cards{
    Title: string;
    Img:string
}

export const Cards = ({Title,Img}:Cards)=> {
    return(
        <div className='w-[12rem] h-[18rem] z-50 border border-gray-600 rounded-xl relative'>
            <img src={`${Img}`}
                 crossOrigin='anonymous'
                 className='w-[100%] h-[70%] bg-orange-100 rounded-t-xl'/>
            <div className='w-full h-[30%] flex justify-center items-center text-lg'>
                {Title}
            </div>
        </div>
    )
}