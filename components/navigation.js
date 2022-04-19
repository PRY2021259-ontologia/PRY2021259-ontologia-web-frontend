import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-regular-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Navigation() {

  let [open, setOpen] = useState(false);
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'Unaunthenticated' && session === null) {
    router.push('/login')
  }

  return (
    <nav className="inset-x-0 sticky top-0  shadow-md md:justify-center items-center celular:text-sm md:text-base">
      <div className="flex-row py-4 md:w-2/3 mx-auto celular:px-6 z-50 bg-white">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row md:space-x-10">
            <a href="/" className="flex items-center">
              <img className="celular:w-9 celular:h-9" src="/Mark.svg" alt="Logo" />
            </a>
            <div className="celular:hidden md:flex items-center">
              <div>
                <Link href="/assistedsearch">
                  <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium hidden">Busqueda guiada</a>
                </Link>
              </div>
              <div>
                <Link href="/suggestions">
                  <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium">Sugerencias</a>
                </Link>
              </div>
              <div>
                <Link href="/definitionshistory">
                  <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium hidden">Historial</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="celular:hidden md:flex flex-row items-center celular:space-x-1 md:space-x-6">
            <div>
              <Link href="/login">
                <button className="flex justify-center items-center hover:bg-gray-100 px-3 h-8 rounded-md text-gray-500 font-medium">
                  Inicia sesión
                </button>
              </Link>
            </div>
            <div>
              <Link href="/register">
                <button className="flex justify-center items-center text-white hover:bg-bluepotatohover h-8 rounded-md w-28 bg-bluepotato font-medium">
                  Regístrate
                </button>
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} className="outline-none focus:bg-gray-300 rounded-md w-9 h-9">
              <FontAwesomeIcon icon={open ? faXmark : faBars} size='2x' className="text-gray-500" />
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden w-full bg-white rounded-lg shadow-lg text-base transition-all duration-300 ease-in absolute z-[-1]  ${open ? 'top-[67px]' : 'top-[-300px]'}`}>
        {
          session ? (
            <div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link href="/suggestions">
                  <a className="text-bluepotato py-1 rounded-md font-medium">Sugerencias</a>
                </Link>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link href="/definitionshistory">
                  <a className="text-bluepotato py-1 rounded-md font-medium">Historial</a>
                </Link>
              </div>
              <div className="flex flex-row pb-2 justify-between items-center py-2 px-6 hover:bg-gray-200 duration-500">
                <div className="flex flex-row space-x-3">
                  <img className="rounded-full w-[45px] h-[45px]" src={session.user.image} />
                  <div className="flex flex-col ">
                    <p>{session.user.name}</p>
                    <p className="text-gray-600">{session.user.email}</p>
                  </div>
                </div>
                <div className="fa-xl text-gray-400">
                  <FontAwesomeIcon icon={faBell} />
                </div>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link href="#">
                  <a className="text-gray-500 py-1 rounded-md font-medium">Perfil</a>
                </Link>
              </div>
              <div onClick={() => signOut()} className="py-3 px-6 hover:bg-gray-200 duration-500">
                <Link href="/login">
                  <a className="text-gray-500 py-1 rounded-md font-medium">Salir</a>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link href="/suggestions">
                  <a className="text-bluepotato py-1 rounded-md font-medium">Sugerencias</a>
                </Link>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link href="/assistedsearch">
                  <a className="text-bluepotato py-1 rounded-md font-medium">Búsqueda guiada</a>
                </Link>
              </div>
              <div className="py-2 px-6 duration-500 text-center">
                <Link href="/login">
                  <a className="text-gray-500 py-1 rounded-md font-medium">Inicia sesión</a>
                </Link>
              </div>
              <div className="py-3 px-6 bg-bluepotato duration-500 text-center">
                <Link href="/register">
                  <a className="text-white py-1 rounded-md font-medium">Regístrate</a>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </nav >
  )
}

