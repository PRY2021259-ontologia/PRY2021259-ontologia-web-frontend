import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";
import CardSlider from '../components/cardslider';
import React from "react";
import ReactDOM from "react-dom";

const blueBox = document.querySelectorAll('.bg-bluepotatohover');
const skyBox = document.querySelectorAll('.bg-blue-500');

const changeColor = ev => {
  // Define button in the DOM
  const button = ev.target.closest('button');
  const button1 = ev.target.closest('button');
  // Check, if the button was clicked
  if (button) {
    // Change color in the DIVs
    for (const box of blueBox) {
      box.classList.add('bg-blue-500');
      box.classList.remove('bg-bluepotatohover');
    } 
    for (const box of skyBox)
    {
      box.classList.add('bg-bluepotatohover');
      box.classList.remove('bg-blue-500');
    }
    return;
  }
  for (const box of blueBox) {
    box.classList.add('bg-bluepotatohover');
    box.classList.remove('bg-blue-500');
  } 
  for (const box of skyBox)
  {
    box.classList.add('bg-blue-500');
    box.classList.remove('bg-bluepotatohover');
  }
};

document.addEventListener('click', changeColor);


export default function AssistedSearch() {
  return (
    <div>

      <Description />

      <Navigation />
      <main className="celular:w-full md:mx-auto md:w-5/6 h-full">
        <div className='flex flex-col'>
          <div className='celular:pt-10 celular:py-5 md:py-1 celular:pl-10'>
            <h1 className='font-bold celular:text-4xl md:text-5xl '>Búsqueda guiada</h1>
          </div>
          <div className='flex md:flex-row celular:flex-col pt-2 justify-center'>
          <Image width={350} height={200} src='/pensando.png' alt='assistedImage' />
          <div className='flex relative md:flex-row celular:flex-col md:ml-1 items-center'>
            <div className="w-80 h-52 bg-blue-500 transform transition-all group-hover:delay-200 delay-300 top-4 left-14 absolute group-hover:top-32 group-hover:-right-16 rounded-lg"></div>
            <div className="w-80 h-52 bg-bluepotatohover  transform transition-all group-hover:delay-100 delay-300 top-8 left-10 absolute group-hover:top-32 group-hover:-right-16 rounded-lg"></div>
            <div className="w-80 h-52 bg-blue-500  transform transition-all group-hover:delay-75 delay-200 top-12 left-6 absolute group-hover:top-32 group-hover:-right-32 rounded-lg"></div>
              <div className='flex flex-col bg-bluepotatohover items-center transform transition-all justify-center shadow-lg border rounded-lg md:ml-2 celular:mx-2 md:mr-20 p-12 h-52 w-80'>
                <div className='py-2'>
                  <p className='flex w-56 font-semibold text-center'>¿Lo que buscas esta relacionado a enfermedades?</p>
                </div>
                <div className='flex flex-row justify-center space-x-4 text-sm py-2'>
                  <button className='rounded-md w-24 h-7  text-center py-1 bg-skyblue text-white'>Sí</button>
                  <button className='rounded-md w-24 h-7 text-center py-1 bg-bluebuscar text-white'>No</button>                  
                </div>
                <div className='flex flex-row justify-center space-x-4 text-sm py-2'>                 
                  <button className='rounded-md w-24 h-7  text-center py-1 bg-bluebuscar text-white'>No se</button>
                  <button className='rounded-md w-24 h-7 text-center py-1 bg-skyblue text-white'>Tal vez</button>
                </div>              
              </div>     
            </div>
            <div className='flex flex-col celular:mx-12 celular:py-4 md:mx-20 md:py-10'>
              <h1 className='font-bold text-3xl py-6'>
                Enlaces relacionados
              </h1>
              <ul className='text-skyblue list-disc px-8'>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}