import Description from '../components/description'
import Image from 'next/image'
import Link from "next/link"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
    <div >

      <Description />

      <Navigation />

      <main className='mx-auto w-2/3 min-h-screen'>
        <div className='flex flex-row py-12 justify-center'>
          <Image src="https://images.squarespace-cdn.com/content/v1/5af9fbd1f407b4826aaf11eb/1610302466407-PUE7R3QKFSCE48BB91YR/Tech+Life+-+Communication.png"
            alt="home image" width={300} height={250} />
        </div>

        <div className='flex flex-row relative justify-center'>
          <div className='relative w-3/5'>
            <input className="w-full rounded-md px-3 border border-black h-10" type="text" placeholder='Ingrese su búsqueda..'></input>
            <div className='pointer-events-none absolute text-black inset-y-2 right-3'>
              <a><FontAwesomeIcon icon={faSearch} size="1x" /></a>
            </div>
          </div>
        </div>

        <div className='flex flex-row justify-center py-6 space-x-10'>
          <Link href="/search">
            <button className="rounded-md hover:bg-bluebuscarhover w-48 h-9 bg-bluebuscar text-white">
              Buscar
            </button>
          </Link>
          <Link href="/assistedsearch">
            <button className="rounded-md hover:bg-bluepotatohover w-48 bg-bluepotato text-white">
              Ayuda en la búsqueda
            </button>
          </Link>
        </div>

        <div className='flex flex-row justify-around py-4 text-base font-medium'>
          <div className=''>Categoría 1
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 shrink-0 w-64 h-22'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
                <p className='text-sm font-medium'>Categoría 1</p>
              </div>
            </div>
          </div>

          <div className=''>Categoría 2
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 shrink-0 w-64 h-22'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
                <p className='text-sm font-medium'>Categoría 2</p>
              </div>
            </div>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 shrink-0 w-64 h-22'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
                <p className='text-sm font-medium'>Categoría 2</p>
              </div>
            </div>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 shrink-0 w-64 h-22'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
                <p className='text-sm font-medium'>Categoría 2</p>
              </div>
            </div>
          </div>

          <div className=''>Categoría 3
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 shrink-0 w-64 h-22'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
                <p className='text-sm font-medium'>Categoría 3</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
