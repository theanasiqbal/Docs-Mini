import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {
    const ref = useRef(null)

    const data = [
        {
            desc: 'this is first card',
         filesize: '1.1mb',
         close: true,
         tag: {isOpen: false, tagTitle: 'Download Now', tagColor: 'sky', },
        },
        {
            desc: 'this is second card',
         filesize: '0.1mb',
         close: true,
         tag: {isOpen: true, tagTitle: 'Download Now', tagColor: 'sky', },
        },
        {
            desc: 'this is third card',
         filesize: '1.2mb',
         close: false,
         tag: {isOpen: true, tagTitle: 'Upload', tagColor: 'green', },
        }
    ]
    
  return (
   
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
            {data.map((item, index)=>{
                return (<Card data={item} reference={ref} />)
            })}
            
        </div>
    
  )
}

export default Foreground