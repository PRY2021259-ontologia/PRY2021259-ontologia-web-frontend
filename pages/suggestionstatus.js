import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Description from '../components/description'
import { useEffect, useState } from 'react'
import { baseUrl } from '../service/api'
import Image from 'next/image'
import dayjs from 'dayjs'

export default function SuggestionStatus() {

    const [date, setDate] = useState('')

    useEffect(() => {
        const listSuggestionsUserById = async () => {
            const user = JSON.parse(localStorage.getItem('username'));
            if (!user) return
            const result = await baseUrl.get(`/users/${user.id}/usersuggestions`)
            if (result.status === 200) {
                if (result.data.length > 0) {
                    const getDate = dayjs(result.data.pop().createdOn).format('MMM D, YYYY')
                    setDate(getDate)
                }
            }
        }
        listSuggestionsUserById()
    }, [])
    return (
        <div>

            <Description />

            <Navigation />

            <main className="mx-auto w-2/3 min-h-screen">
                <div className='flex flex-col'>
                    <h1 className='font-bold celular:text-3xl md:text-5xl py-10'>Estado de sugerencia</h1>
                    <div className='flex celular:flex-col md:flex-row justify-between'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col celular:space-y-20 md:space-y-16 celular:py-10 md:py-20 px-6'>
                                {
                                    date ? <div className='w-full h-10 relative' >  <Image layout='intrinsic' width={50} height={50} objectFit='cover' src="/rectangle.png" alt="rectangle" /></div>
                                        : <Image layout='intrinsic' width={50} height={50} src="/emptyRectangle.svg" alt="rectangle" />
                                }
                                <div className='w-full h-10 relative' > <Image layout='intrinsic' width={50} height={50} objectFit='' src="/emptyRectangle.svg" alt="rectangle" /> </div>

                                <div className='w-full h-10 relative' >  <Image layout='intrinsic' width={50} height={50} objectFit='' src="/emptyRectangle.svg" alt="rectangle" /></div>

                            </div>
                            <div className='flex flex-col celular:space-y-7 md:space-y-20 celular:py-10 md:py-20 '>
                                <h1 className='text-gray-900 text-xl font-medium'>Recibido el {date ? date : '02 de marzo'}</h1>
                                <h1 className='text-gray-900 text-xl font-medium'>Sugerencia Revisada y agregada</h1>
                                <h1 className='text-gray-900 text-xl font-medium'>Implementado</h1>
                            </div>
                        </div>
                        <div className='py-10  '>
                            <div className='w-full h-20 relative'  >
                                <Image layout='intrinsic' width={350} height={350} objectFit='' src="/littlethings.png" alt="littlethings" />
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}