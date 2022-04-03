import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'

export default function AssistedSearch() {
  return (
    <div>

      <Description />

      <Navigation />
      <main className="mx-auto w-2/3 min-h-screen">
        <div className='flex flex-col'>
          <div className='py-10 '>
            <h1 className='font-bold text-5xl'>Búsqueda guiada</h1>
          </div>
          <div className='flex flex-row pt-6 justify-center'>
            <div className='flex flex-row ml-10 items-center'>
              <img src='/pensando.png' alt='assistedimg' />
              <div className='flex flex-col justify-center shadow-lg border rounded-lg ml-2 mr-20 p-12 h-52 w-80'>
                <div className='py-2'>
                  <p className='flex w-56 font-semibold text-center'>¿Lo que buscas esta relacionado a enfermedades?</p>
                </div>
                <div className='flex flex-row justify-center space-x-4 text-sm py-2'>
                  <button className='rounded-md w-24 h-7 bg-skyblue text-white'>Sí</button>
                  <button className='rounded-md w-24 h-7 bg-bluebuscar text-white'>No</button>
                </div>
              </div>
            </div>
            <div className='flex flex-col mx-20 py-10'>
              <h1 className='font-bold text-3xl py-6'>
                Enlaces relacionados
              </h1>
              <ul className='text-skyblue list-disc px-8'>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
                <li className='py-1 hover:underline'>www.ontologiapapa.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}