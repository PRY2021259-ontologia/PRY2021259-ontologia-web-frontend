import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import Image from 'next/image'

export default function Details() {
  return (
    <div>

      <Description />

      <Navigation />

      <main className="mx-auto w-2/3 min-h-screen">
        <div className='flex flex-col'>
          <div className='flex flex-row py-8 px-10 justify-between'>
            <div className="flex flex-row items-end space-x-8">
              <h1 className='font-extrabold text-5xl'>Solanum tuberosum</h1>
              <button className='w-40 h-8 bg-skyblue text-white rounded-md font-medium'>Guardar detalle</button>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-center'>
              <p className='text-lg font-medium'>¿Te fue útil esta búsqueda?</p>
              </div>
              <div className='flex flex-row justify-center space-x-4'>
                <button className='rounded-md w-11 bg-skyblue text-white'>Sí</button>
                <button className='rounded-md w-11 bg-bluebuscar text-white'>No</button>
              </div>
            </div>
          </div>
          <div className='flex flex-row shadow-md'>
            <div className='w-1/2 p-10 font-medium'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='flex flex-row justify-between shadow-lg border-2 border-gray-400 rounded-lg basis-2/5 m-6 p-5 font-medium'>
              <div>
                <p>Enlaces adicionales:</p>
                <ul>
                  <li>Enlace 1</li>
                  <li>Enlace 2</li>
                  <li>Enlace 3</li>
                  <li>Enlace 4</li>
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