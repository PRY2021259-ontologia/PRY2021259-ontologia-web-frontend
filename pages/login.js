import Footer from '../components/footer'
import Description from '../components/description'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function Login() {
  return (
    <div>

      <Description />

      <main className='mx-auto w-2/3 font-medium'>
        <div className='flex flex-col items-center pt-10'>

          <div className='flex flex-col items-center'>
            <p className="text-bluepotato">
              <Image src="/Mark.svg" alt="Logo" width={52} height={48} /></p>
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='font-extrabold text-3xl py-3'>Inicia sesión</h1>
                <p className='font-normal text-gray-600 pb-6'>O <Link href='/register'><button className='text-bluepotato hover:underline'>regístrate</button>
                </Link></p>
              </div>
            </div>
          </div>

          <forms className='shadow shadow-gray-400 rounded-lg py-5 px-10 mb-16 w-2/5 h-full'>
            <div>
              <div className='py-3'>
                <label className='flex flex-row py-1 text-gray-700'>Correo</label>
                <input className="w-full rounded-md px-3 border outline-1 outline-offset-0 outline-gray-400 border-gray-300 text-gray-600 h-10" type="email" />
              </div>
              <div className='py-3'>
                <label className='flex flex-row py-1 text-gray-700'>Contraseña</label>
                <input className="w-full rounded-md px-3 border outline-1 outline-offset-0 outline-gray-400 border-gray-300 text-gray-600 h-10" type="password" />
              </div>
              <div className='flex flex-row justify-between py-2'>
                <label className='text-gray-800 font-normal'><input type="checkbox" /> Recordar mi cuenta</label>
                <p className=''><Link href='/'><button className='text-bluepotato hover:underline font-medium'>¿Olvidaste tu contraseña?</button></Link></p>
              </div>
              <div className='py-3'>
                <Link href='/home'>
                  <button className="w-full h-9 hover:bg-bluepotatohover rounded-md bg-bluepotato font-medium text-white">
                    Iniciar sesión
                  </button>
                </Link>
              </div>
              <div className='flex flex-row justify-center py-2 text-gray-500'>
                <p className='w-full pt-3 text-center border-b leading-[0.1em]'>
                  <span className='bg-white py-3 px-2'>También puedes iniciar sesión con</span></p>
              </div>
              <div className='flex flex-row justify-around text-gray-500 py-5'>
                <button href="https://www.facebook.com"
                  className="border-2 border-gray-300 w-28 h-9 rounded-md hover:bg-gray-200" >
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </button>
                <button href="https://www.twitter.com"
                  className="border-2 border-gray-300 w-28 h-9 rounded-md hover:bg-gray-200">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </button>
                <button href="https://www.github.com/"
                  className="border-2 border-gray-300 w-28 h-9 rounded-md hover:bg-gray-200">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </button>
              </div>
            </div>
          </forms>
        </div>
      </main>

      <Footer />

    </div>
  )
}