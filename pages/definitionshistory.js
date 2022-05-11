import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { baseUrl } from '../service/api'
import 'dayjs/locale/es'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import { useCallback } from 'react'
dayjs.extend(utc)
dayjs.extend(timezone)

export default function DifinitionsHistory() {

    const [listHistories, setListHistories] = useState([])
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

    const newListHistory = useCallback(() => {
        const startDate = dayjs(valueDate.startDate).format('YYYY-MM-DD')
        const endDate = dayjs(valueDate.endDate).format('YYYY-MM-DD')
        const filterBYDate = listHistories.filter(history => {
            const date = dayjs(history.createdOn).format('YYYY-MM-DD')
            return date >= startDate && date <= endDate
        })
        setListFilter(filterBYDate)
    }, [listHistories,valueDate.endDate,valueDate.startDate])

    const convertDate = (date) => {
        if (!date) {
            return '11:50pm'
        }
        const timestamp = dayjs.utc(date, 'YYYY-MM-DD HH:mm:ss')
        const dateUser = dayjs(timestamp).tz(dayjs.tz.guess())
        return dateUser.format('hh:mm A')
    }

    useEffect(() => {
        newListHistory()
        return () => {
            setListFilter([])
        }
    }, [valueDate,newListHistory])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('username'))
        if (!user) return
        const fetchHistoriesByUser = async () => {
            const response = await baseUrl.get(`/userhistories/users/${user.id}/userhistories`)
            if (response.status === 200) {
                const sortedByDate = response.data.slice().sort((a, b) => {
                    const dayA = dayjs(a.createdOn).locale('es').format('YYYY/MM/DD HH:mm:ss')
                    const dayB = dayjs(b.createdOn).locale('es').format('YYYY/MM/DD HH:mm:ss')
                    return dayB < dayA ? 1 : -1
                }
                )
                setListHistories(sortedByDate)
                setListFilter(sortedByDate)
            }
        }
        fetchHistoriesByUser()
    }, [])
    return (
        <div>

            <Description />

            <Navigation />
            <main className="celular:text-sm celular:w-3/4 md:text-base mx-auto md:w-2/3 min-h-screen">
                <div className='flex flex-col'>
                    <div className='py-10 '>
                        <h1 className='font-bold celular:text-4xl md:text-5xl'>Historial de Conceptos</h1>
                    </div>
                    <div className='flex celular:flex-col md:flex-row md:space-x-16 celular:mb-6 md:mb-0'>
                        <div className='flex flex-col p-7 shadow-md rounded-lg celular:w-full md:w-1/4 h-1/2 my-2 border'>
                            <h1 className='font-bold text-lg'>
                                Rango de fechas
                            </h1>
                            <div className='py-2 font-medium '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de inicio</label>
                                </div>
                                <div className='py-1'>
                                    <input className='w-full rounded-md px-3 outline-1
                                    outline-offset-0 outline-gray-400 border border-gray-300
                                    text-gray-600 h-10' type="date" name="startDate" onChange={(e) => handleChangeDate(e)} />
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
                        <div className='flex flex-col w-full'>
                            {
                                Array.isArray(listFilter) && listFilter.map((history) => {
                                    return (
                                        <div key={history.id} className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                            <div className='flex celular:flex-col md:flex-row md:items-center'>
                                                <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                                <h1 className='px-1 font-medium'>{history.textSearched} -</h1>
                                                <a href={process.env.NEXT_PUBLIC_URL_DEPLOY + history.url} className='flex text-bluedetails py-3 underline'>{process.env.NEXT_PUBLIC_URL_DEPLOY + history.url}</a>
                                            </div>
                                            <h1 className=''>{convertDate(history.createdOn)}</h1>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
