import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Description from '../components/description'
import { useForm } from 'react-hook-form'

export default function Suggestions() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const myfunc = (data) => {
    alert(data.name + ' ' + data.lastname);
  }

  return (
    <div>

      <Description />

      <Navigation />

      <main className="mx-auto w-2/3 min-h-screen">
        <div className='flex flex-col'>
          <h1 className='font-bold text-5xl py-10'>Sugerencias</h1>
          <div className='flex flex-row justify-between'>
            <div className='py-10'>
              <img src="/remotelife.png" alt="remoteLife" />
            </div>
            <div className='w-1/2'>
              <form onSubmit={handleSubmit(myfunc)}>

                <div className='py-2'>
                  <label htmlFor='fullname' className='flex flex-row py-1 text-gray-700'>Nombre completo</label>
                  <input {...register('fullname', { required: true })} className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="text" />
                  {errors.fullname && errors.fullname.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su nombre completo</span>}
                </div>

                <div className='py-2'>
                  <label htmlFor='email' className='flex flex-row py-1 text-gray-700'>Correo</label>
                  <input {...register('email', { required: true })} className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="email" />
                  {errors.email && errors.email.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su correo</span>}
                </div>

                <div className='py-2'>
                  <label htmlFor='phone' className='flex flex-row py-1 text-gray-700'>Celular</label>
                  <input {...register('phone', { required: true })} className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10" type="tel"/>
                  {errors.phone && errors.phone.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su numero</span>}
                </div>

                <div className='py-2'>
                <label htmlFor='text' className='flex flex-row py-1 text-gray-700'>Sugerencia</label>
                  <textarea {...register('text', { required: true })} className='w-full rounded-md px-3 py-1 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600' name="textarea" rows="10" cols="50"></textarea>
                  {errors.text && errors.text.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor escriba una sugerencia</span>}
                </div>

                <button type='submit' className="w-40 h-9 py-2 hover:bg-bluepotatohover rounded-md bg-bluepotato font-medium text-white">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}