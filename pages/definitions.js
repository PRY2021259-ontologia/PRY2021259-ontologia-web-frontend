import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import { baseUrl } from '../service/api'
import dayjs from 'dayjs'
import { useCallback } from 'react'

export default function Definitions() {

    const [listConcepts, setListConcepts] = useState([])
    const [listFilter, setListFilter] = useState([])
    const [valueDate, setValueDate] = useState({
        startDate: '',
        endDate: ''
    })

    const handleChangeDate = (e) => {
        setValueDate({
            ...valueDate,
            [e.target.name]: e.target.value
        })
    }


    const newListConcepts = useCallback(() => {
        const startDate = dayjs(valueDate.startDate).format('YYYY-MM-DD')
        const endDate = dayjs(valueDate.endDate).format('YYYY-MM-DD')
        const filterBYDate = listConcepts.filter(history => {
            const date = dayjs(history.createdOn).format('YYYY-MM-DD')
            return date >= startDate && date <= endDate
        })
        setListFilter(filterBYDate)
    }, [listConcepts, valueDate.endDate, valueDate.startDate])


    useEffect(() => {
        newListConcepts()
        return () => {
            setListFilter([])
        }
    }, [valueDate, newListConcepts])


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('username'))
        if (!user) return
        const fetchConceptsByUser = async () => {
            const response = await baseUrl.get(`/users/${user.id}/userconcepts`)
            if (response.status === 200) {
                const sortedByDate = response.data.slice().sort((a, b) => {
                    const dayA = dayjs(a.createdOn).locale('es').format('YYYY/MM/DD HH:mm:ss')
                    const dayB = dayjs(b.createdOn).locale('es').format('YYYY/MM/DD HH:mm:ss')
                    return dayB < dayA ? 1 : -1
                }
                )
                setListConcepts(sortedByDate)
                setListFilter(sortedByDate)
            }
        }
        fetchConceptsByUser()
    }, [])

    return (
        <div>

            <Description />

            <Navigation />
            <main className="celular:text-sm md:text-base mx-auto w-2/3 min-h-screen">
                <div className='flex flex-col'>
                    <div className='py-10 '>
                        <h1 className='font-bold celular:text-4xl md:text-5xl'>Conceptos guardados</h1>
                    </div>
                    <div className='flex celular:flex-col md:flex-row md:space-x-16'>
                        <div className='flex flex-col p-7 shadow-md rounded-lg h-1/2 my-2 border'>
                            <h1 className='font-bold text-lg'>
                                Rango de fechas
                            </h1>
                            <div className='py-2 font-medium '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de inicio</label>
                                </div>
                                <div className='py-1'>
                                    <input name="startDate" onChange={(e) => handleChangeDate(e)} className='w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10' type="date" />
                                </div>
                            </div>
                            <div className='py-2 font-medium '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de fin</label>
                                </div>
                                <div className='py-1'>
                                    <input name="endDate" onChange={(e) => handleChangeDate(e)} className='w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10' type="date" />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>

                            {
                                Array.isArray(listFilter) && listFilter.map((concept) => {
                                    return (
                                        <div key={concept.id} className=' p-5 shadow-md rounded-lg my-2 border '>
                                            <h1 className='py-1 font-medium'>{concept.userConceptTitle}</h1>
                                            <p className='py-3 text-gray-500 md:text-lg'>{concept.userConceptDescription}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main >

            <Footer />
        </div >
    )
}
