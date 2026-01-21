import canteen from '../assets/canteen.jpg';
import cafe from '../assets/cafe.jpg';
import hallRoom from '../assets/hallRoom.jpg';
import library from '../assets/library.jpg';
import newBuilding from '../assets/newBuilding.jpg';
import mainGate from '../assets/mainGate.jpg';
import oceanSide from '../assets/ocenSide.jpg';
import mupiGarden from '../assets/mupiGarden.png';
import mupiAmazing from '../assets/mupiAmazing.jpg';
import walking from '../assets/walkin.jpg';

import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import teacher4 from '../assets/teacher4.jpg';
import teacher5 from '../assets/teacher5.jpg';
import teacher6 from '../assets/teacher6.jpg';
import teacher7 from '../assets/teacher7.jpg';
import teacher8 from '../assets/teacher8.jpg';

const galleryData = [
  {
    id: 1,
    img: cafe,
    title: 'Our world class library',
    desc: 'Mupi library is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 2,
    img: canteen,
    title: 'The  Biggest Canteen',
    desc: 'Mupi Canteen is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 3,
    img: library,
    title: 'Our world class library',
    desc: 'Mupi library is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 2,
    img: canteen,
    title: 'The  Biggest Canteen',
    desc: 'Mupi Canteen is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 3,
    img: library,
    title: 'Our world class library',
    desc: 'Mupi library is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 4,
    img: cafe,
    title: 'Our world class library',
    desc: 'Mupi library is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 5,
    img: mupiGarden,
    title: 'Our world class library',
    desc: 'Mupi library is one of the greatest library in the world.You can find all kind of books here.',
  },
  {
    id: 6,
    img: mainGate,
    title: 'Our world class library',
    desc: 'Mupi library is one of the greatest library in the world.You can find all kind of books here.',
  },
];

export const gridImages = [
  { src: walking, alt: 'Walking', className: 'rounded-tl-full', gridClass: '' },
  { src: mainGate, alt: 'Main Gate', className: '', gridClass: 'col-span-2 row-span-2' },
  { src: canteen, alt: 'Canteen', className: 'rounded-tr-full', gridClass: '' },
  { src: hallRoom, alt: 'Hall Room', className: 'rounded-bl-full', gridClass: '' },
  { src: library, alt: 'Library', className: 'rounded-full', gridClass: '' },
  { src: newBuilding, alt: 'New Building', className: 'rounded-l-full', gridClass: '' },
  { src: hallRoom, alt: 'Hall Room 2', className: 'rounded-tl-full', gridClass: '' },
  { src: library, alt: 'Library 2', className: 'rounded-[20px]', gridClass: '' },
  { src: newBuilding, alt: 'New Building 2', className: 'rounded-tr-full', gridClass: '' },
];

export const teachersImages = [
  { src: teacher1, alt: 'Walking', className: 'rounded-tl-full', gridClass: 'col-span-2' },

  { src: teacher2, alt: 'Main Gate', className: 'rounded-xl', gridClass: '' },

  { src: teacher3, alt: 'Canteen', className: 'rounded-tr-full', gridClass: '' },

  {
    src: teacher4,
    alt: 'Hall Room',
    className: 'rounded-bl-full rounded-tr-full',
    gridClass: 'row-span-2',
  },

  { src: teacher8, alt: 'Library', className: 'rounded-full', gridClass: '' },

  { src: teacher6, alt: 'New Building', className: 'rounded-l-full', gridClass: 'col-span-2' },

  { src: teacher7, alt: 'Hall Room 2', className: 'rounded-tl-full', gridClass: '' },
  { src: teacher8, alt: 'Library 2', className: 'rounded-r-full', gridClass: 'col-span-2' },
];

export default galleryData;
