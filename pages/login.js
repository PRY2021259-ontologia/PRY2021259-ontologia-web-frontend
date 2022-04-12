import Footer from '../components/footer'
import Description from '../components/description'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, } from '@fortawesome/free-brands-svg-icons'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'


export default function Login() {

  const { data: session, status } = useSession()
  const router = useRouter()

  if (status !== 'loading' && status === 'authenticated') {
    router.push('/')
  }

  const { register, handleSubmit, formState: { errors } } = useForm();
  const myfunc = (data) => {
    alert(data.email);
  }

  return (
    <div>

      <Description />

      <main className=' celular:text-sm md:text-base  md:mx-auto md:w-2/3 font-medium min-h-screen'>
        <div className='flex flex-col items-center pt-14'>

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

          <div className='shadow shadow-gray-400 rounded-lg py-5 px-10 mb-16 md:w-2/5 h-full celular:w-full'>
            <form onSubmit={handleSubmit(myfunc)}>
              <div>
                <div className='py-3'>
                  <label htmlFor='email' className='flex flex-row py-1 text-gray-700'>Correo</label>
                  <input {...register('email', { required: true })} className="w-full rounded-md px-3 border outline-1 outline-offset-0 outline-gray-400 border-gray-300 text-gray-600 h-10" type="email" />
                  {errors.email && errors.email.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su correo</span>}
                </div>
                <div className='py-3'>
                  <label htmlFor='password' className='flex flex-row py-1 text-gray-700'>Contraseña</label>
                  <input {...register('password', { required: true, minLength: 5 })} className="w-full rounded-md px-3 border outline-1 outline-offset-0 outline-gray-400 border-gray-300 text-gray-600 h-10" type="password" />
                  {errors.password && errors.password.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su contraseña</span>}
                </div>
                <div className='flex flex-row justify-between py-2'>
                  <label htmlFor='remember' className='text-gray-800 font-normal'>
                    <input type="checkbox" /> Recordar mi cuenta</label>
                  <p className=''><Link href='/'><button className='text-bluepotato hover:underline font-medium'>¿Olvidaste tu contraseña?</button></Link></p>
                </div>
                <div className='py-3'>
                  <button className="w-full h-9 hover:bg-bluepotatohover rounded-md bg-bluepotato font-medium text-white">
                    Iniciar sesión
                  </button>
                </div>
                <div className='flex flex-row justify-center py-2 text-gray-500'>
                  <p className='w-full pt-3 text-center border-b leading-[0.1em]'>
                    <span className='bg-white py-3 px-2'>También puedes iniciar sesión con</span></p>
                </div>
              </div>
            </form>
            <div className='flex flex-row justify-between text-gray-500 py-5'>
              <button onClick={() => signIn('facebook')} className="border-2 border-gray-300 celular:w-28 md:w-48 h-9 rounded-md hover:bg-gray-200" >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </button>
              <button onClick={() => signIn('google')} className="border-2 border-gray-300 celular:w-28 md:w-48 h-9 rounded-md hover:bg-gray-200">
                <FontAwesomeIcon icon={faGoogle} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  )
}