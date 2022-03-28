import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'

export default function Details() {
  return (
    <div>

      <Description />

      <Navigation />
      <main className="mx-auto w-2/3 min-h-screen">
        <div className='flex flex-col'>
          <div className='flex flex-row'>
            <h1>Solanum tuberosum</h1>
            <button>Guardar detalle</button>
            <div className='flex flex-col'>
              <p>¿Te fue útil esta búsqueda?</p>
              <div className='flex flex-row'>
                <button>Sí</button>
                <button>No</button>
              </div>
            </div>
          </div>
          <div className='flex flex-row'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.</p>
              <div>
                <ul>
                  <li>Enlace 1</li>
                  <li>Enlace 2</li>
                  <li>Enlace 3</li>
                  <li>Enlace 4</li>
                </ul>
              </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}