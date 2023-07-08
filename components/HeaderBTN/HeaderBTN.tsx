import React from 'react';
interface BTN {
    Title:string,
    SetTitle:any
}
export const HeaderBTN = ({Title,SetTitle}:BTN)=> {
    return(
        <div className='text-gray-800 font-light text-lg p-2 hover:text-red-600 hover:border-b-2 border-b-red-600
             cursor-pointer' onClick={()=>SetTitle(Title)}>
            {Title}
        </div>
    )
}