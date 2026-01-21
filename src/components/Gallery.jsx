import galleryData from '@/Data/galleryData';
import { gridImages } from '@/Data/galleryData';
import { teachersImages } from '@/Data/galleryData';

import Button from '@/components/Button';
import GalleryCard from '@/components/GalleryCard';
import OurTeachersGallery from '@/components/OurTeachersGallery';

const Gallery = () => {
  return (
    <>
      <main className="bg-[#d8d8d8] h-100%">
        {/* Gallery Banner start */}
        <article className="wrapper  h-screen py-30  flex justify-between items-center gap-20">
          <section className="left w-1/2">
            <h1 className="text-3xl md:text-5xl text-gray-800 font-semibold leading-16 ">
              Strategic,mission- our world class University--Galley website with perfect support
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

          {/* Grid Galley start */}

          <section className="right grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-1/2 p-10 ">
            {gridImages.map(({ src, alt, className, gridClass }, index) => {
              return (
                <div key={index} className={`${gridClass} hover:scale-103 duration-400`}>
                  <img src={src} alt={alt} className={`${className} object-cover w-full h-full`} />
                </div>
              );
            })}
          </section>
        </article>

        <h2 className="text-center text-gray-800 text-5xl py-8">
          Here is our Gallery Card Section{' '}
        </h2>

        <GalleryCard />

        <h3 className="text-5xl text-gray-800 text-center py-10">
          Here is our Prestigious Teachers Gallery
        </h3>

        <OurTeachersGallery />
      </main>
    </>
  );
};

export default Gallery;
