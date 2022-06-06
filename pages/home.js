import Description from '../components/description'
import Image from 'next/image'
import Link from "next/link"
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { useStore } from '../store'

export default function Home() {
    const [categories, setCategories] = useState([])

    const state = useStore(state => state)

    useEffect(() => {
        fetch("https://backend-ontologia.azurewebsites.net/api/categorydiseases").then((response) => response.json()).then((categories) => setCategories(categories));
    }, [])



    const handleInputChange = (newInputValue) => {
        state.setSearchInput(newInputValue)
        console.log(newInputValue)
        console.log(state)
    }

    return (
        <div >

            <Description />

            <Navigation />

            <main className='mx-auto w-2/3 min-h-screen'>
                <div className='flex justify-center mb-8 mt-12'>
                    <Image width={320} height={59} src="/Frame.png" alt="home image" />
                </div>

                <div className='flex flex-row relative justify-center'>
                    <div className='relative w-3/5'>
                        <input className="w-full rounded-md px-3 border border-black h-10" type="text" onChange={(e) => handleInputChange(e.target.value)} placeholder='Ingrese su búsqueda..'></input>
                        <div className='pointer-events-none absolute text-black inset-y-2 right-3'>
                            <a><FontAwesomeIcon icon={faSearch} size="1x" /></a>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row justify-center py-6 space-x-10'>
                    <Link passHref href="/search">
                        <a href="replace" className="rounded-md text-center hover:bg-bluebuscarhover w-48 h-9 bg-bluebuscar text-white font-medium">
                            Buscar
                        </a>
                    </Link>
                    <Link passHref href="/assistedsearch">
                        <a href="replace" className="rounded-md text-center hover:bg-bluepotatohover w-48 bg-bluepotato text-white font-medium">
                            Ayuda en la búsqueda
                        </a>
                    </Link>
                </div>

                <div className='flex flex-row justify-around py-4 text-base font-medium'>

                    <div className=''>
                        {
                            categories.map((category) => (
                                <div key={category.categoryDiseaseName}>

                                    <div className='text-center'>
                                        <p>{category.categoryDiseaseName}</p>
                                    </div>
                                    <div className='flex flex-row shadow-md shadow-gray-400 rounded-lg py-5 px-10 my-3 shrink-0 w-64 h-22'>
                                        <Image src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG90YXRvfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                            alt="avatar" width={55} height={42} className="rounded" />
                                        <div className="flex items-center px-6">
                                            <p className='text-sm font-medium'>  FUNCIONAAA</p>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    )
}
