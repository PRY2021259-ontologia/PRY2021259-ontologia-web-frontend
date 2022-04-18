import Description from '../components/description'
import Image from 'next/image'
import Link from "next/link"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { getSession, signOut } from 'next-auth/react'

export const getServerSideProps = async (context) => {

  const session = await getSession(context)

  if (!session) return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }

  return {
    props: {
      session
    }
  }
}

export default function Index({ session }) {
  return (
    <div>

      <Description />

      <Navigation />

      <div>
        {
          session ? (
            <div>
              <h1>{session.user.name}</h1>
              <p>{session.user.email}</p>
              <img src={session.user.image} alt="" />
            </div>
          ) : (
            <p>Loading screen</p>
          )
        }
        <button onClick={() => signOut()}>
          logout
        </button>
      </div>

      <main className=' celular:text-sm celular:w-full md:text-base md:w-2/3 md:min-h-screen md:mx-auto min-h-screen'>
        <div className='flex md:flex-row pb-12 pt-20 justify-center  md:w-full md:h-full celular:mx-auto'>
          <img src="/Frame.png" alt="home image" />
        </div>

        <div className='flex md:flex-row relative justify-center'>
          <div className='relative celular:w-full celular:mx-8 md:w-3/5 ' >
            <input className="w-full rounded-md px-3 border border-black h-10" type="text" placeholder='Ingrese su búsqueda..'></input>
            <div className='pointer-events-none absolute text-black md:inset-y-2 celular:inset-y-2.5 celular:right-0 celular: px-3 md:right-3 '>
              <a><FontAwesomeIcon icon={faSearch} size="1x" /></a>
            </div>
          </div>
        </div>

        <div className='flex md:flex-row justify-center md:py-6 2xl:space-x-10 celular:flex-col items-center celular:space-x-0 py-6 md:space-x-10'>
          <Link href="/search">
            <button className="celular:my-1 celular:w-80 rounded-xl hover:bg-bluebuscarhover md:w-48 h-9 bg-bluebuscar text-white celular:text-lg md:text-base">
              Buscar
            </button>
          </Link>
          <Link href="/assistedsearch">
            <button className=" celular:my-1 celular:w-80 rounded-xl hover:bg-bluepotatohover md:w-48 h-9 bg-bluepotato text-white celular:text-lg md:text-base">
              Ayuda en la búsqueda
            </button>
          </Link>
        </div>

        <div className='flex celular:flex-col celular:mx-8 md:flex-row celular:items-center md:items-start justify-around py-4 celular:text-lg md:text-base '>
          <div className='flex flex-col celular:w-full md:w-64'>
            <p className='celular:text-center md:text-left font-medium'> Categoría 1</p>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 celular:w-full md:w-64 h-22 celular:justify-center'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
                <p className='celular:text-lg md:text-sm '>Categoría 1</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col celular:w-full md:w-64'>
            <p className='celular:text-center md:text-left font-medium'> Categoría 2</p>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 celular:w-full md:w-64 h-22 celular:justify-center'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
              <p className='celular:text-lg md:text-sm '>Categoría 2</p>
              </div>
            </div>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 celular:w-full md:w-64 h-22 celular:justify-center'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
              <p className='celular:text-lg md:text-sm '>Categoría 2</p>
              </div>
            </div>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 celular:w-full md:w-64 h-22 celular:justify-center'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
              <p className='celular:text-lg md:text-sm '>Categoría 2</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col celular:w-full md:w-64'>
            <p className='celular:text-center md:text-left font-medium'> Categoría 3</p>
            <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 celular:w-full md:w-64 h-22 celular:justify-center'>
              <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt="avatar" width={55} height={42} className="rounded" />
              <div className="flex items-center px-6">
              <p className='celular:text-lg md:text-sm '>Categoría 3</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}


