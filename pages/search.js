import Navigation from '../components/navigation';
import Description from '../components/description'
import Footer from '../components/footer'
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { baseUrl } from '../service/api';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { Alerting } from '../utils/alert';
import Image from 'next/image';
import { useStore } from '../store'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Search() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const [enfer, setenfer] = useState([])

  const [succes, setSucces] = useState(true)
  const searchInput = useStore(state => state.searchInput)
  console.log(searchInput)

  useEffect(() => {
    console.log(searchInput)
    if (searchInput !== "") {
      fetch("https://search-ontologia.azurewebsites.net/search?parameter=" + searchInput).then((response) => response.json()).then((enfer) => setenfer(enfer)).catch((error) => Alerting.error(error));
    }
    console.log(enfer)
  }, [])


  const goSearch = async (resourceId) => {
    // Requere the id of the plant
    const user = JSON.parse(localStorage.getItem('username'))
    console.log(resourceId)
    const plantDisease = await baseUrl.get(`/plantdiseases/${resourceId}`)

    console.log(plantDisease)

    if (!user) {
      router.push(`/search/${resourceId}`)
      // Alerting({
      //   title: 'Error',
      //   message: 'Debes iniciar sesión para poder realizar esta acción',
      //   type: 'error',
      //   icon: 'error'
      // })
      // router.push('/login')
      return
    }
    const saveHistory = await baseUrl.post('/userhistories', {
      url: `/search/${resourceId}`,
      textSearched: searchInput
    })
    console.log(saveHistory)

    if (saveHistory.status === 200) {
      // TODO: Fix thath the post is not working

      await baseUrl.post(`/userhistories/${saveHistory.data.id}/userhistories/${user.id}`)
      router.push(`/search/${resourceId}`)
    }
  }
  return (
    <div>
      <Description />

      <Navigation />

      <main className="celular:text-sm md:text-base mx-auto min-h-screen w-2/3">
        <div className='flex md:flex-row celular:flex-col-reverse'>
          <div className='flex flex-col celular:w-full md:w-3/4'>
            <div className='items-center md:px-5 md:py-6 celular:flex celular:text-center'>
              <div className='relative z-[1] md:w-2/3 celular:w-full celular:bottom-[250px] md:bottom-0'>
                <input className="celular:w-60 md:w-full rounded-md px-3 border border-gray-400 h-10" type="text" placeholder='Búsqueda'></input>
                <div className='absolute text-gray-400 z-[2] md:inset-y-2 md:right-3 celular:inset-y-2.5 celular:flex celular:right-5'>
                  <Link href="/search">
                    <a><FontAwesomeIcon icon={faSearch} size="1x" /></a>
                  </Link>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap py-8 md:px-8 md:gap-x-10 gap-y-12'>
              {enfer.map((plant) => (
                <div key={plant.ontologyId} className='relative shadow-md shadow-gray-400 rounded-lg  celular:w-[260px] md:w-[370px] celular:h-[200px] md:h-48'>
                  <div className=' px-6 pt-2.5'>
                    <h1 className='text-gray-900 text-xl font-medium'>{plant.nombreCientifico}</h1>
                    <p className='py-2 text-gray-500 celular:h-[90px] md:h-[105px] line-clamp-4'>{plant.descripcion}</p>
                  </div>
                  <div className='absolute celular:w-[260px] md:w-[370px] bottom-0 items-center h-10 px-6 py-1.5 rounded-b-lg bg-whiteresultado'>
                    {/* <Link href={'/search/' + plant.id} key={plant.id}> */}
                    <a onClick={() => goSearch(plant.ontologyId)} className='text-indigo-700 hover:underline hover:cursor-pointer'>Ver detalles →</a>
                    {/* </Link> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='flex md:h-screen md:items-center z-[1] celular:py-5 md:py-0 celular:relative celular:top-16 md:top-0'>
            <Image layout='intrinsic' width={300} height={300} src="https://images.squarespace-cdn.com/content/v1/5af9fbd1f407b4826aaf11eb/1610302466407-PUE7R3QKFSCE48BB91YR/Tech+Life+-+Communication.png"
              alt="home image" />
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
