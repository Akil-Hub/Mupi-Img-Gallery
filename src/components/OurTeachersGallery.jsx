import React from 'react'
import { teachersImages } from '@/Data/galleryData'
const OurTeachersGallery = () => {
  return (
    <article className='wrapper flex justify-between items-center'>

            
          {/* Grid Galley start */}

          <section className="left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-1/2 p-20   ">

          {
            teachersImages.map(({src,alt,className,gridClass},index)=>{
                return <div key={index} className={`${gridClass} hover:scale-105 duration-300`}>

                    <img src={src} alt={alt}  className={`${className} object-cover w-full h-full`}/>


                </div>
            })
          }
            
          </section>
             <section className="right w-1/2">
            <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold leading-16 ">
             Here is your world class teachers.They are professional on their subject.
            </h1>

            <p className="py-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus hic libero,
              quisquam id, ad perspiciatis repellendus esse, iusto minima eligendi maiores. Fugit
              deleniti facere repellendus error possimus quos soluta nostrum.
            </p>

            <p className="py-8 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, suscipit!
            </p>
          </section>
        </article>
  )
}

export default OurTeachersGallery