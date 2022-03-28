import Footer from '../components/footer'
import Description from '../components/description'
import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
  return (
    <div>

      <Description />

      <main className='mx-auto w-2/3 font-medium min-h-screen'>
        <div className='flex flex-col items-center pt-14'>

          <div className='flex flex-col items-center'>
            <p className="text-bluepotato">
              <Image src="/Mark.svg" alt="Logo" width={52} height={48} /></p>
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='font-extrabold text-3xl py-3'>Regístrate</h1>
                <p className='font-normal text-gray-600 pb-6'>O <Link href='/login'><button className='text-bluepotato hover:underline'>inicia sesión</button>
                </Link></p>
              </div>
            </div>
          </div>

          <form className='shadow shadow-gray-400 rounded-lg py-5 px-10 mb-16 w-2/5 h-full'>
            <div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Nombres</label>
                <input className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="text" />
              </div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Apellidos</label>
                <input className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="text" />
              </div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Correo</label>
                <input className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="email" />
              </div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Contraseña</label>
                <input className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="password" />
              </div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Repetir contraseña</label>
                <input className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="password" />
              </div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Fecha de nacimiento</label>
                <input className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="date" />
              </div>
              <div className='py-2'>
                <label className='flex flex-row py-1 text-gray-700'>Ocupacion</label>
                <select className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10">
                  <option selected>Seleccione una opcion</option>
                  <option className="text-gray-700" value="1">Ganadero</option>
                  <option className="text-gray-700" value="2">Cientifico</option>
                  <option className="text-gray-700" value="3">Cocinero</option>
                </select>
              </div>
              <div className='flex flex-row justify-between py-2'>
                <label className='text-gray-800 font-normal'><input type="checkbox" /> Aceptar los <a className='hover:underline text-bluepotato' href='https://www.privacypolicies.com/live/be4d3db6-a44b-4c49-be03-9e2df14e122a' target="_blank" rel="noreferrer noopener">términos y condiciones</a></label>
              </div>
              <div className='py-5'>
                <Link href='/login'>
                  <button className="w-full h-9 hover:bg-bluepotatohover rounded-md bg-bluepotato font-medium text-white">
                    Registrar cuenta
                  </button>
                </Link>
              </div>
            </div>
          </form>

        </div>
      </main>

      <Footer />
    </div>
  )
}
