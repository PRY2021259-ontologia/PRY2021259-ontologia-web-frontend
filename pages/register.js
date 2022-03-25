import Footer from '../components/footer'
import Head from 'next/head'
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

      <Head>
        <title> Potato Ontology</title>
        <meta name="description" content="Generated with Next.Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mx-auto w-2/3 font-medium'>
        <div className='flex flex-col items-center pt-10'>

          <div className='flex flex-col items-center'>
            <p className="text-bluepotato">
              <Image src="/Mark.svg" alt="Logo" width={52} height={48} /></p>
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='font-extrabold text-3xl py-3'>Regístrate</h1>
                <p className='font-normal text-gray-600 pb-6'>O <Link href='/login'><button className='text-bluepotato'>inicia sesión</button>
                </Link></p>
              </div>
            </div>
          </div>

          <div className='shadow shadow-gray-400 rounded-lg py-5 px-10 mb-16 w-2/5 h-full'>
            <div className='py-3'>
              <label className='flex flex-row py-1 text-gray-700'>Correo</label>
              <input className="w-full rounded-md px-3 border border-gray-300 h-10" type="email" />
            </div>
            <div className='py-3'>
              <label className='flex flex-row py-1 text-gray-700'>Contraseña</label>
              <input className="w-full rounded-md px-3 border border-gray-300 h-10" type="password" />
            </div>
            <div className='py-3'>
              <Link href='/login'>
                <button className="w-full h-9 rounded-md bg-bluepotato font-medium text-white">
                  Registrar cuenta
                </button>
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}
