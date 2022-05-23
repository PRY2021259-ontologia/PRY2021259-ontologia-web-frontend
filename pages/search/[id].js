import Navigation from '../../components/navigation'
import Description from '../../components/description'
import Footer from '../../components/footer'
import Image from 'next/image'
import { baseUrl } from '../../service/api'
import { Alerting } from '../../utils/alert'
import Link from "next/link"

export default function Details({ plant }) {

  const saveConcept = async () => {
    const user = JSON.parse(localStorage.getItem('username'))
    if (!user) return
    const response = await baseUrl.get(`/users/${user.id}/userconcepts`)
    const existConcept = response.data.find(concept => concept.userConceptTitle === plant.plantDiseaseName)
    if (existConcept) {
      Alerting({
        title: 'Ya tienes este concepto guardado',
        message: 'Puedes verlo en la sección de conceptos guardados',
        type: 'warning',
        icon: 'warning'
      })
      return;
    }
    const addConcept = await baseUrl.post('/userconcepts', {
      userConceptTitle: plant?.plantDiseaseName,
      userConceptDescription: plant?.plantDiseaseDescription,
      url: '/search/' + plant?.id,
    })
    if (addConcept.status === 200) {
      await baseUrl.post(`users/${user.id}/userconcepts/${addConcept.data.id}/`)
      Alerting({
        title: 'Concepto guardado',
        message: 'Puedes verlo en la sección de conceptos guardados',
        type: 'success',
        icon: 'success'
      })
    }
  }
  return (
    <div>

      <Description />

      <Navigation />

      <main className="celular:text-sm md:text-base mx-auto celular:w-full md:w-5/6 min-h-screen">
        <div className='flex flex-col md:items-start celular:items-center'>
          <div className='flex md:flex-row celular:flex-col my-6 py-8 px-10 justify-between md:shadow-md rounded-lg w-full'>
            <div className="flex md:flex-row celular:flex-col celular:items-center md:items-end md:space-x-20">
              <h1 className='font-extrabold text-2xl md:py-0 celular:py-4 text-center'>Enfermedades de la papa</h1>
              <button onClick={() => saveConcept(plant)} className='text-sm celular:w-full celular:h-10 md:w-40 md:h-10 bg-skyblue text-white rounded-md font-medium'>Guardar detalle</button>
              <button onClick={() => saveConcept(plant)} className='text-sm celular:w-full celular:h-10 md:w-40 md:h-10 bg-bluepotatohover text-white rounded-md font-medium'>Eliminar detalle</button>
            </div>
            <div className='flex flex-col md:py-0 celular:py-10 md:w-[250px]'>
              <div className='flex justify-center md:h-7'>
                <p className='text-base font-semibold'>¿Te fue útil esta búsqueda?</p>
              </div>
              <div className='flex flex-row celular:justify-between md:justify-center space-x-4 text-sm celular:py-4 md:py-0'>
                <button className='rounded-md celular:w-36 celular:h-8 md:w-24 md:h-7 bg-skyblue text-white'>Sí</button>
                <button className='rounded-md celular:w-36 celular:h-8 md:w-24 md:h-7 bg-bluebuscar text-white'>No</button>
              </div>
            </div>
          </div>
          <div>
          <Link passHref href="/search">
         <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Regresar</a>
          </Link>
          </div>
          <div className='flex md:flex-row md:w-full md:justify-between celular:flex-col items-center'>
            <div className='flex flex-col md:w-1/2'>
              <h1 className='text-3xl px-10 pt-5 font-medium'>{plant.plantDiseaseName}</h1>
              <div className=' px-10 py-5 '>
                <p>{plant.plantDiseaseDescription}</p>
              </div>
            </div>
            <div className='flex md:flex-row celular:flex-col-reverse md:justify-between items-center h-72 shadow-lg rounded-xl w-100 m-6 celular:p-5 md:p-12'>

              <div>
                <Image src="https://blush.design/api/download?shareUri=_nRDPd5Vo&w=800&h=800&fm=png"
                  alt="detail image" width={125} height={162} />
              </div>
              <div>
              <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="popup-modal">
                Conocer más
              </button>

              <div id="popup-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                  <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                          </button>
                          <div className="p-6 text-center">                          
                              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Links con mayor información</h3>                          
                          </div>
                      </div>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticPaths = async () => {
  const plat = await fetch('https://backend-ontologia.azurewebsites.net/api/plantdiseases');
  const data = await plat.json();
  const paths = data.map(plant => {

    return {
      params: { id: plant.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const plat = await fetch('https://backend-ontologia.azurewebsites.net/api/plantdiseases/' + id);
  const data = await plat.json();

  return {
    props: {
      plant: data
    },
  }
}