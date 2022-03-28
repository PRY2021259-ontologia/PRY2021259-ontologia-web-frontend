import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import Image from 'next/image'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
  return (
    <div>
      <Description />

      <Navigation />

      <main className="mx-auto min-h-screen w-2/3">
        <div className='flex flex-row'>
          <div className='flex flex-col w-3/4'>
            <div className='px-5 py-6 items-center'>
              <div className='relative w-2/3'>
                <input className="w-full rounded-md px-3 border border-black h-10" type="text" placeholder='Solanum tuberosum'></input>
                <div className='absolute text-black inset-y-2 right-3'>
                  <Link href="/search">
                    <a><FontAwesomeIcon icon={faSearch} size="1x" /></a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap py-4 px-8 gap-x-9 gap-y-8'>
              <div className='shadow-md shadow-gray-400 rounded-lg w-[370px] h-48'>
                <div className=' px-6 pt-2.5'>
                  <h1 className='text-gray-900 text-xl font-medium'>Resultado 1</h1>
                  <p className='py-2 text-gray-500'>Solanum tuberosum es una especia herbácea perteneciente al género Solanum originaria de la región que comprende el altiplano sur del Péru</p>
                </div>
                <div className='items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                  <Link href='/details'>
                    <a className='text-indigo-700 hover:underline'>Ver detalles →</a>
                  </Link>
                </div>
              </div>

              <div className='shadow-md shadow-gray-400 rounded-lg w-[370px] h-48'>
                <div className=' px-6 pt-2.5'>
                  <h1 className='text-gray-900 text-xl font-medium'>Resultado 2</h1>
                  <p className='py-2 text-gray-500'>Solanum tuberosum es una especia herbácea perteneciente al género Solanum originaria de la región que comprende el altiplano sur del Péru</p>
                </div>
                <div className='items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                  <Link href='/details'>
                    <a className='text-indigo-700 hover:underline'>Ver detalles →</a>
                  </Link>
                </div>
              </div>

              <div className='shadow-md shadow-gray-400 rounded-lg w-[370px] h-48'>
                <div className=' px-6 pt-2.5'>
                  <h1 className='text-gray-900 text-xl font-medium'>Resultado 3</h1>
                  <p className='py-2 text-gray-500'>Solanum tuberosum es una especia herbácea perteneciente al género Solanum originaria de la región que comprende el altiplano sur del Péru</p>
                </div>
                <div className='items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                  <Link href='/details'>
                    <a className='text-indigo-700 hover:underline'>Ver detalles →</a>
                  </Link>
                </div>
              </div>

              <div className='shadow-md shadow-gray-400 rounded-lg w-[370px] h-48'>
                <div className=' px-6 pt-2.5'>
                  <h1 className='text-gray-900 text-xl font-medium'>Resultado 4</h1>
                  <p className='py-2 text-gray-500'>Solanum tuberosum es una especia herbácea perteneciente al género Solanum originaria de la región que comprende el altiplano sur del Péru</p>
                </div>
                <div className='items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                  <Link href='/details'>
                    <a className='text-indigo-700 hover:underline'>Ver detalles →</a>
                  </Link>
                </div>
              </div>

              <div className='shadow-md shadow-gray-400 rounded-lg w-[370px] h-48'>
                <div className=' px-6 pt-2.5'>
                  <h1 className='text-gray-900 text-xl font-medium'>Resultado 5</h1>
                  <p className='py-2 text-gray-500'>Solanum tuberosum es una especia herbácea perteneciente al género Solanum originaria de la región que comprende el altiplano sur del Péru</p>
                </div>
                <div className='items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                  <Link href='/details'>
                    <a className='text-indigo-700 hover:underline'>Ver detalles →</a>
                  </Link>
                </div>
              </div>

              <div className='shadow-md shadow-gray-400 rounded-lg w-[370px] h-48'>
                <div className=' px-6 pt-2.5'>
                  <h1 className='text-gray-900 text-xl font-medium'>Resultado 6</h1>
                  <p className='py-2 text-gray-500'>Solanum tuberosum es una especia herbácea perteneciente al género Solanum originaria de la región que comprende el altiplano sur del Péru</p>
                </div>
                <div className='items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                  <Link href='/details'>
                    <a className='text-indigo-700 hover:underline'>Ver detalles →</a>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className='py-6'>
            <Image src="https://images.squarespace-cdn.com/content/v1/5af9fbd1f407b4826aaf11eb/1610302466407-PUE7R3QKFSCE48BB91YR/Tech+Life+-+Communication.png"
              alt="home image" width={464} height={390} />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}