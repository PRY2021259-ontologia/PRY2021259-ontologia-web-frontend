import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from "next/image"

export default function Navigation() {

  let [open, setOpen] = useState(false);
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'Unaunthenticated' && session === null) {
    router.push('/login')
  }

  const [isAuth, SetIsAuth] = useState(false)
  const [user, setUser] = useState(null)

  const signOutLocal = () => {
    localStorage.removeItem('username')
    SetIsAuth(false)
    setUser(null)
    router.push('/login')

    session && signOut()
  }

  useEffect(() => {
    SetIsAuth(localStorage.getItem('username'))
    setUser(JSON.parse(localStorage.getItem('username')))
  }, [isAuth])

  return (
    <nav className="inset-x-0 sticky z-[4] top-0 shadow-md md:justify-center items-center celular:text-sm md:text-base ">
      <div className="flex-row sticky z-[4] py-4 md:w-2/3 mx-auto celular:px-6 bg-white ">
        {
          session || isAuth ? (
            <div>
              <div className="flex flex-row justify-between z-[3]">
                <div className="flex flex-row md:space-x-10">
                  <Link passHref href="/" className="flex items-center">
                    <Image layout='intrinsic' alt="Logo" width={40} height={40} className="celular:w-9 celular:h-9" src="/Mark.svg" />
                  </Link>
                  <div className="celular:hidden md:flex items-center md:space-x-10">
                    <div>
                      <Link passHref href="/assistedsearch">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Busqueda guiada</a>
                      </Link>
                    </div>
                    <div>
                      <Link passHref href="/suggestions">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium">Sugerencias</a>
                      </Link>
                    </div>
                    <div>
                      <Link passHref href="/definitionshistory">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Historial</a>
                      </Link>
                    </div>
                    <div>
                      <Link passHref href="/definitions">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Conceptos</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="celular:hidden md:flex flex-row items-center celular:space-x-1 md:space-x-6">
                  <div>
                    <div className="fa-xl text-gray-800">
                      <FontAwesomeIcon icon={faBell} />
                    </div>
                  </div>
                  <button onClick={() => signOutLocal()}>
                    {session ? <Image alt="hola" layout='fill' className="rounded-full w-[45px] h-[45px]" src={session.user.image} />
                      : <FontAwesomeIcon size="lg" icon={faUser} />}
                  </button>
                </div>
                <div className="md:hidden flex items-center">
                  <button onClick={() => setOpen(!open)} className="outline-none focus:bg-gray-300 rounded-md w-9 h-9">
                    <FontAwesomeIcon icon={open ? faXmark : faBars} size='2x' className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-row justify-between z-[3]">
                <div className="flex flex-row md:space-x-10">
                  <Link passHref href="/" className="flex items-center">
                    <Image layout='intrinsic' alt="Logo" width={40} height={40} className="celular:w-9 celular:h-9" src="/Mark.svg" />
                  </Link>
                  <div className="celular:hidden md:flex items-center">
                    <div>
                      <Link passHref href="/assistedsearch">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium hidden">Busqueda guiada</a>
                      </Link>
                    </div>
                    <div>
                      <Link passHref href="/suggestions">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium">Sugerencias</a>
                      </Link>
                    </div>
                    <div>
                      <Link passHref href="/definitionshistory">
                        <a href="replace" className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium hidden">Historial</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="celular:hidden md:flex flex-row items-center celular:space-x-1 md:space-x-6">
                  <div>
                    <Link passHref href="/login">
                      <a href="replace" className="flex justify-center items-center hover:bg-gray-100 px-3 h-8 rounded-md text-gray-500 font-medium">
                        Inicia sesión
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link passHref href="/register">
                      <a href="replace" className="flex justify-center items-center text-white hover:bg-bluepotatohover h-8 rounded-md w-28 bg-bluepotato font-medium">
                        Regístrate
                      </a>
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
          )
        }
      </div>
      <div className={`md:hidden w-full bg-white rounded-lg shadow-lg text-base transition-all duration-300 ease-in fixed z-[3]  ${open ? 'top-[67px]' : 'top-[-300px]'}`}>
        {
          session || isAuth ? (
            <div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="/suggestions">
                  <a href="replace" className="text-bluepotato py-1 rounded-md font-medium">Sugerencias</a>
                </Link>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="/definitionshistory">
                  <a href="replace" className="text-bluepotato py-1 rounded-md font-medium">Historial</a>
                </Link>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="/definitions">
                  <a href="replace" className="text-bluepotato py-1 rounded-md font-medium">Conceptos</a>
                </Link>
              </div>
              <div className="flex flex-row pb-2 justify-between items-center py-2 px-6 hover:bg-gray-200 duration-500">
                <div className="flex flex-row space-x-3">
                  {session ? <Image alt="" layout='fill' className="rounded-full w-[45px] h-[45px]" src={session.user.image} />
                    : <FontAwesomeIcon size="lg" className="rounded-full w-[45px] h-[45px] m-auto" icon={faUser} />}
                  <div className="flex flex-col ">
                    <p>{session ? session.user.name : user.name}</p>
                    <p className="text-gray-600">{session ? session.user.email : user.email}</p>

                  </div>
                </div>
                <div className="fa-xl text-gray-400">
                  <FontAwesomeIcon icon={faBell} />
                </div>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="#">
                  <a href="replace" className="text-gray-500 py-1 rounded-md font-medium">Perfil</a>
                </Link>
              </div>
              <div onClick={() => signOutLocal()} className="py-3 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="/login">
                  <a href="replace" className="text-gray-500 py-1 rounded-md font-medium">Salir</a>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="/suggestions">
                  <a href="replace" className="text-bluepotato py-1 rounded-md font-medium">Sugerencias</a>
                </Link>
              </div>
              <div className="py-2 px-6 hover:bg-gray-200 duration-500">
                <Link passHref href="/assistedsearch">
                  <a href="replace" className="text-bluepotato py-1 rounded-md font-medium">Búsqueda guiada</a>
                </Link>
              </div>
              <div className="py-2 px-6 duration-500 text-center">
                <Link passHref href="/login">
                  <a href="replace" className="text-gray-500 py-1 rounded-md font-medium">Inicia sesión</a>
                </Link>
              </div>
              <div className="py-3 px-6 bg-bluepotato duration-500 text-center">
                <Link passHref href="/register">
                  <a href="replace" className="text-white py-1 rounded-md font-medium">Regístrate</a>
                </Link>
              </div>
            </div>
          )
        }
      </div>
    </nav >
  )
}
