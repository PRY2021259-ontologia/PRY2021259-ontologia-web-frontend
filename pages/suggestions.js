import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Description from '../components/description'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState } from 'react'
import UserSuggestionsApiService from '../service/user-suggestions-services'

export default function Suggestions() {

  //const onSubmit = (data) => {
  //alert(JSON.stringify(data));
  //}

  //const [suggestion, setSuggestion] = useState({
  //comment: '',
  //optionalEmail: '',
  // })

  //function submit(e) {
  //e.preventDefault();
  //UserSuggestionsApiService.createNewUserSuggestion(suggestion)
  //.then(res => {
  //console.log(res.suggestion)
  //})
  //}

  //function handle(e) {
  // const newsuggestion = { ...suggestion }
  // newsuggestion[e.target.id] = e.target.value
  //setSuggestion(newsuggestion)
  //console.log(newsuggestion)
  //}

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  //const baseURL =process.env.URL_LOCAL;

  async function onSubmitForm(values) {
    let config = {
      method: 'POST',
      url: 'https://backend-ontologia.azurewebsites.net/api/usersuggestions',
      headers: {
        'Content-Type': 'application/json'
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
        console.log('Sugerencia enviada con éxito');
        alert('Sugerencia enviada con éxito');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>

      <Description />

      <Navigation />

      <main className="celular:text-sm md:text-base mx-auto w-2/3 min-h-screen">
        <div className='flex flex-col'>
          <h1 className='font-bold celular:text-2xl md:text-5xl celular:py-5 md:py-10'>Sugerencias</h1>
          <div className='flex md:flex-row celular:flex-col justify-between'>
            <div className='py-10'>
              <img src="/remotelife.png" alt="remoteLife" />
            </div>
            <div className=' md:w-1/2 celular:pb-6 md:pb-0'>

              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className='py-2'>
                  <label htmlFor='fullname' className='flex flex-row py-1 text-gray-700'>Nombre completo</label>
                  <input
                    {...register('fullname', { required: true })}
                    className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                    name="fullname"
                    type="text"
                  />
                  {errors.fullname && errors.fullname.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su nombre completo</span>}
                </div>

                <div className='py-2'>
                  <label htmlFor='optionalEmail' className='flex flex-row py-1 text-gray-700'>Correo</label>
                  <input
                    {...register('optionalEmail', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                    name="optionalEmail"
                    className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                    type="email"
                  />
                  {errors.optionalEmail && errors.optionalEmail.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su correo</span>}
                </div>

                <div className='py-2'>
                  <label htmlFor='phone' className='flex flex-row py-1 text-gray-700'>Celular</label>
                  <input
                    {...register('phone', { required: true })}
                    className="w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10"
                    name="phone"
                    type="number"
                  />
                  {errors.phone && errors.phone.type === 'required' && <span className='text-red-600 text-sm font-normal'>Por favor ingrese su numero</span>}
                </div>

                <div className='py-2'>
                  <label htmlFor='comment' className='flex flex-row py-1 text-gray-700'>Sugerencia</label>
                  <textarea
                    {...register('comment', { required: true })}
                    className='w-full rounded-md px-3 py-1 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600'
                    name="comment"
                    rows="10"
                    cols="50"
                  />
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