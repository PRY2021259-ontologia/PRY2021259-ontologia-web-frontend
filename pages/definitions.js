import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import { useEffect, useState } from 'react'
import { baseUrl } from '../service/api'
import dayjs from 'dayjs'
import { useCallback } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"

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
            <main className="celular:text-sm md:text-base mx-auto w-5/6 h-full">
                <div className='flex flex-col'>
                    <div className='flex justify-between py-12'>
                        <h1 className='font-bold celular:text-4xl md:text-5xl'>Conceptos guardados</h1>
                        <Link passHref href="/definitionshistory">
                                <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Ir a Historial de Conceptos</a>
                        </Link>
                    </div>
                    <div className='flex flex-row relative justify-left'>
                    <div className='relative w-2/5 h-14'>
                        <input className="w-full rounded-md px-3 border border-black h-10" type="text" placeholder='Buscar concepto...'></input>
                        <div className='pointer-events-none absolute text-black inset-y-2 right-3'>
                            <a><FontAwesomeIcon icon={faSearch} size="1x" /></a>
                        </div>
                    </div>
                    </div>
                    <div className='flex celular:flex-col md:flex-row md:space-x-16'>
                        <div className='flex flex-col p-7 shadow-md rounded-lg h-1/2 w-1/3 my-2 border'>
                            <h1 className='font-bold text-lg'>
                                Filtrar por fechas
                            </h1>
                            <div className='py-2 font-semibold '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de inicio</label>
                                </div>
                                <div className='py-1'>
                                    <input name="startDate" onChange={(e) => handleChangeDate(e)} className='w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10' type="date" />
                                </div>
                            </div>
                            <div className='py-2 font-semibold '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de fin</label>
                                </div>
                                <div className='py-1'>
                                    <input name="endDate" onChange={(e) => handleChangeDate(e)} className='w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10' type="date" />
                                </div>
                            </div>
                            <div>
                            <button  className='text-sm celular:w-full celular:h-10 md:w-40 md:h-10 bg-bluepotatohover text-white rounded-md font-medium'>Eliminar filtro</button>
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
