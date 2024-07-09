import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloading } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.1} className='flex-shrink-0 relative w-60 h-72 rounded-[40px] text-white bg-zinc-900/90 px-8 py-10 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full'>
            <div className='flex items-center  py-3  px-8  justify-between mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoIosCloseCircleOutline/> : <MdDownloading /> }
                
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === `green` ? `bg-green-600` : `bg-blue-600`} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
                ) 
            }
            
        </div>
    </motion.div>
  )
}

export default Card