import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import Image from 'next/image'

export default function AssistedSearch() {
  return (
    <div>

      <Description />

      <Navigation />
      <main className="celular:w-full md:mx-auto md:w-2/3 min-h-screen">
        <div className='flex flex-col'>
          <div className='celular:pt-10 celular:py-5 md:py-10 celular:pl-10'>
            <h1 className='font-bold celular:text-4xl md:text-5xl '>Búsqueda guiada</h1>
          </div>
          <div className='flex md:flex-row celular:flex-col md:pt-6 justify-center'>
            <div className='flex md:flex-row celular:flex-col md:ml-10 items-center'>
              <Image layout='intrinsic' width={350} height={350} src='/pensando.png' alt='assistedImage' />
              <div className='flex flex-col justify-center shadow-lg border rounded-lg md:ml-2 celular:mx-2 md:mr-20 p-12 h-52 w-80'>
                <div className='py-2'>
                  <p className='flex w-56 font-semibold text-center'>¿Lo que buscas esta relacionado a enfermedades?</p>
                </div>
                <div className='flex flex-row justify-center space-x-4 text-sm py-2'>
                  <button className='rounded-md w-24 h-7 bg-skyblue text-white'>Sí</button>
                  <button className='rounded-md w-24 h-7 bg-bluebuscar text-white'>No</button>
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