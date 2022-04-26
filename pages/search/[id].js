import Navigation from '../../components/navigation'
import Description from '../../components/description'
import Footer from '../../components/footer'
import Image from 'next/image'

export default function Details({ plant }) {
  return (
    <div>

      <Description />

      <Navigation />

      <main className="celular:text-sm md:text-base mx-auto celular:w-full md:w-2/3 min-h-screen">
        <div className='flex flex-col md:items-start celular:items-center'>
          <div className='flex md:flex-row celular:flex-col my-6 py-8 px-10 justify-between md:shadow-md rounded-lg w-full'>
            <div className="flex md:flex-row celular:flex-col celular:items-center md:items-end md:space-x-20">
              <h1 className='font-extrabold text-4xl md:py-0 celular:py-4 text-center'>Enfermedades de la papa</h1>
              <button className='celular:w-full celular:h-10 md:w-40 md:h-8 bg-skyblue text-white rounded-md font-medium'>Guardar detalle</button>
            </div>
            <div className='flex flex-col md:py-0 celular:py-10 md:w-[250px]'>
              <div className='flex justify-center'>
                <p className='text-lg font-medium'>¿Te fue útil esta búsqueda?</p>
              </div>
              <div className='flex flex-row celular:justify-between md:justify-center space-x-4 text-sm celular:py-4 md:py-0'>
                <button className='rounded-md celular:w-36 celular:h-8 md:w-24 md:h-7 bg-skyblue text-white'>Sí</button>
                <button className='rounded-md celular:w-36 celular:h-8 md:w-24 md:h-7 bg-bluebuscar text-white'>No</button>
              </div>
            </div>
          </div>

          <div className='flex md:flex-row md:w-full md:justify-between celular:flex-col items-center'>
            <div className='flex flex-col md:w-1/2'>
              <h1 className='text-3xl px-10 pt-5 font-medium'>{plant.name}</h1>
              <div className=' px-10 py-5 '>
                <p>{plant.description}</p>
              </div>
            </div>
            <div className='flex md:flex-row celular:flex-col-reverse md:justify-between items-center h-72 shadow-lg rounded-xl w-1/2 m-6 celular:p-5 md:p-20'>
              <div>
                <ul className='text-skyblue'>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                  <li className='hover:underline'>www.ontologiapapa.com</li>
                </ul>
              </div>
              <div>
                <Image src="https://blush.design/api/download?shareUri=_nRDPd5Vo&w=800&h=800&fm=png"
                  alt="detail image" width={125} height={162} />
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