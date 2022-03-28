import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'

export default function Search() {
  return (
    <div>
      <Description />

      <Navigation />

      <main className="mx-auto w-2/3 min-h-screen">
        <div className='flex flex-row justify-center '>
          <h1 className='font-bold'>ME FUI AL TRONO</h1>

        </div>
      </main>

      <Footer />
    </div>
  )
}