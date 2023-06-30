import React from "react";

interface MapDet{
    Num:string;
    Det:string
}
export const MapDeatails = ({Num,Det}:MapDet)=> {
    return(
        <div className='w-[5rem] flex flex-col items-center justify-center gap-2'>
            <h2 className='text-center text-red-600 text-6xl font-bold'>{Num}</h2>
            <h3 className='text-center text-5xl font-bold'>{Det}</h3>
        </div>
    )
}