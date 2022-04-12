import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Details() {
  return (
    <div>

      <Description />

      <Navigation />

      <main className="celular:text-sm md:text-base mx-auto w-2/3 min-h-screen">
        <div className='flex flex-col md:items-start celular:items-center'>
          <div className='flex md:flex-row celular:flex-col my-6 py-8 px-10 justify-between md:shadow-md rounded-lg'>
            <div className="flex md:flex-row celular:flex-col md:items-end md:space-x-20">
              <h1 className='font-extrabold text-4xl md:py-0 celular:py-4 text-center'>Enfermedades de la papa</h1>
              <button className='w-40 h-8 bg-skyblue text-white rounded-md font-medium'>Guardar detalle</button>
            </div>
            <div className='flex flex-col md:py-0 celular:py-4 md:w-[250px]'>
              <div className='flex justify-center'>
                <p className='text-lg font-medium'>¿Te fue útil esta búsqueda?</p>
              </div>
              <div className='flex flex-row justify-center space-x-4 text-sm'>
                <button className='rounded-md w-24 h-7 bg-skyblue text-white'>Sí</button>
                <button className='rounded-md w-24 h-7 bg-bluebuscar text-white'>No</button>
              </div>
            </div>
          </div>

          <div className='flex md:flex-row celular:flex-col items-center'>
            <div className='flex flex-col md:w-1/2'>
              <h1 className='text-3xl px-10 pt-5 font-medium'>Titulo 1</h1>
              <div className=' px-10 py-5 '>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
                <p className='py-5'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div className='flex md:flex-row celular:flex-col-reverse md:justify-between items-center h-72 shadow-lg rounded-xl w-1/2 m-6 p-20'>
              <div>
                <ul className='text-skyblue'>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                </ul>
              </div>
              <div>
                <Image src="https://blush.design/api/download?shareUri=_nRDPd5Vo&w=800&h=800&fm=png"
                  alt="detail image" width={125} height={162} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}