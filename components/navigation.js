import Link from "next/link"
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="flex flex-col sticky top-0 z-10 shadow-md items-center bg-white border-b-2">
      <div className="container py-4">
        <div className="flex flex-row px-2.5 justify-around">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image src="/Mark.svg" alt="Logo" width={40} height={40} />
            </a>
            <Link href="/suggestions">
              <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 ml-16 rounded-md font-medium">Sugerencias</a>
            </Link>
          </div>
          <div className="flex flex-row items-center space-x-10">
            <Link href="/login">
              <button className="flex justify-center items-center hover:bg-gray-100 px-3 h-8 rounded-md text-gray-500 font-medium">
                Inicia sesión
              </button>
            </Link>
            <Link href="/register">
              <button className="flex justify-center items-center hover:bg-bluepotatohover h-8 rounded-md w-28 bg-bluepotato text-white font-medium">
                Regístrate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}