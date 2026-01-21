import React from 'react'
import Button from '@/components/Button';
import galleryData from '@/Data/galleryData';
const GalleryCard = () => {
  return (
     <article className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 wrapper gap-5 items-center justify-center">
          {galleryData.map(({ title, img, id, desc }) => {
            return (
              <section
                className="card bg-gray-300 rounded-b-[30px]  shadow-2xl my-5 hover:scale-103 duration-400 "
                key={id}
              >
                <img src={img} alt="" className="w-full  h-60 rounded-t-[40px]" />
                <div className="p-5">
                  <h2 className="text-xl py-1">{title}</h2>

                  <p className="text-sm py-1 pb-2">{desc}</p>

                  <div className="flex gap-3 py-2 justify-center items-center">
                    <Button title="Explore More" />
                    <Button title="View More" className="bg-gray-600 text-white" />
                  </div>
                </div>
              </section>
            );
          })}
        </article>
  )
}

export default GalleryCard