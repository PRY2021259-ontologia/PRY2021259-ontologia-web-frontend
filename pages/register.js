import Footer from '../components/footer'
import Description from '../components/description'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import router, { useRouter } from 'next/router'
import { baseUrl } from '../service/api'
import { Alerting } from '../utils/alert'


export default function Register() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  async function onSubmitForm(values) {

    const { name, lastName, email, password, dateOfBirth, occupation } = values;

    const listUser = await baseUrl.get('/users');
    const existUser = listUser.data.find(user => user.email === email);

    if (existUser) {
      Alerting({
        title: 'Usuario Repetido',
        message: 'El usuario ya existe',
        type: 'error',
        icon: 'error'
      });
      return
    }

    await baseUrl.post('/users', { name, lastName, email, dateOfBirth, occupation });
    await baseUrl.post('/userlogins', { username: email, password });
    Alerting({
      title: 'Registro Exitoso',
      message: 'Por favor iniciar sesión',
      type: 'success',
      icon: 'success'
    });
    router.push('/login');
  }

  return (
    <div>

      <Description />

      <main className=' celular:text-sm md:text-base md:mx-auto md:w-2/3 font-medium min-h-screen'>
        <div className='flex flex-col items-center pt-14'>

          <div className='flex flex-col items-center'>
            <p className="text-bluepotato">
              <Image src="/Mark.svg" alt="Logo" width={52} height={48} /></p>
            <div>
              <div className='flex flex-col items-center'>
                <h1 className='font-extrabold text-3xl py-3'>Regístrate</h1>
                <p className='font-normal text-gray-600 pb-6'>O <Link passHref href='/login'><a href="replace" className='text-bluepotato hover:underline'>inicia sesión</a>
                </Link></p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmitForm)} className='shadow shadow-gray-400 rounded-lg py-5 px-10 mb-16 md:w-2/5 h-full celular:w-full'>
            <div>
              <div className='py-2'>
                <label htmlFor='name' className='flex flex-row py-1 text-gray-700'>Nombres</label>
                <input
                  {...register('name', { required: true })}
                  name="name"
                  className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                  type="text"
                />
                {errors.name && errors.name.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su nombre</span>}
              </div>
              <div className='py-2'>
                <label htmlFor='lastName' className='flex flex-row py-1 text-gray-700'>Apellidos</label>
                <input
                  {...register('lastName', { required: true })}
                  name="lastName"
                  className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                  type="text"
                />
                {errors.lastName && errors.lastName.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su apellido</span>}
              </div>
              <div className='py-2'>
                <label htmlFor='email' className='flex flex-row py-1 text-gray-700'>Correo</label>
                <input
                  {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                  name="email"
                  className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                  type="email"
                />
                {errors.email && errors.email.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su correo</span>}
              </div>
              <div className='py-2'>
                <label htmlFor='password' className='flex flex-row py-1 text-gray-700'>Contraseña</label>
                <input
                  {...register('password', { required: true, minLength: 5 })}
                  name="password"
                  className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                  type="password"
                />
                {errors.password && errors.password.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su contraseña</span>}
                {errors.password && errors.password.type === 'minLength' && <span className='text-red-600 text-sm font-normal'>La contraseña debe contener por lo menos 5 caracteres</span>}
              </div>
              <div className='py-2'>
                <label htmlFor='confirmPassword' className='flex flex-row py-1 text-gray-700'>Repetir contraseña</label>
                <input
                  {...register('confirmPassword', { required: true, minLength: 5 })}
                  name="confirmPassword"
                  className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                  type="password"
                />
                {errors.confirmPassword && errors.confirmPassword.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor vuelva a ingresar su contraseña</span>}
                {errors.confirmPassword && errors.confirmPassword.type === 'minLength' && <span className='text-red-600 text-sm font-normal'>La contraseña debe contener por lo menos 5 caracteres</span>}
              </div>
              <div className='py-2'>
                <label htmlFor='dateOfBirth' className='flex flex-row py-1 text-gray-700'>Fecha de nacimiento</label>
                <input
                  {...register('dateOfBirth', { required: true })}
                  name="dateOfBirth"
                  className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                  type="date"
                />
                {errors.dateOfBirth && errors.dateOfBirth.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese una fecha</span>}
              </div>
              <div className='py-2'>
                <label htmlFor='occupation' className='flex flex-row py-1 text-gray-700'>Ocupacion</label>
                <select {...register('occupation', { required: true })} className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10">
                  <option value="">Seleccione una opcion</option>
                  <option className="text-gray-700" value="1">Ganadero</option>
                  <option className="text-gray-700" value="2">Cientifico</option>
                  <option className="text-gray-700" value="3">Cocinero</option>
                </select>
                {errors.occupation && errors.occupation.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su ocupacion</span>}
              </div>
              <div className='flex flex-col justify-between py-2'>
                <label htmlFor='conditions' className='text-gray-800 font-normal'>
                  <input
                    {...register('conditions', { required: true })}
                    type="checkbox"
                  /> Aceptar los <a className='hover:underline text-bluepotato' href='https://www.privacypolicies.com/live/be4d3db6-a44b-4c49-be03-9e2df14e122a' target="_blank" rel="noreferrer noopener">términos y condiciones</a></label>
                {errors.conditions && errors.conditions.type === 'required' && <span className='text-red-600 text-sm font-normal'>Acepte los terminos y condiciones</span>}
              </div>
              <div className='py-5'>
                <button type='submit' className="w-full h-9 hover:bg-bluepotatohover rounded-md bg-bluepotato font-medium text-white">
                  Registrar cuenta
                </button>
              </div>
            </div>
          </form>

        </div>
      </main>

      <Footer />
    </div>
  )
}

