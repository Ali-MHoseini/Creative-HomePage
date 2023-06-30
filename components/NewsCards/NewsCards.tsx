import React from "react";

interface Cards{
    Title: string;
    Img:string
}

export const NewsCards = ({Title,Img}:Cards)=> {
    return(
        <div className='w-[20rem] h-[24rem] z-50 border border-gray-600 rounded-xl relative
         hover:border-orange-400 cursor-pointer'>
            <img src={`${Img}`}
                 crossOrigin='anonymous'
                 className='w-[100%] h-[70%] bg-orange-100 rounded-t-xl'/>
            <div className='w-full h-[30%] p-4 text-lg'>
                {Title}
            </div>
        </div>
    )
}