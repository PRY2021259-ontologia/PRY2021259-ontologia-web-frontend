import Link from "next/link"
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="flex inset-x-0 sticky top-0 z-10 shadow-md justify-center items-center md:text-base bg-white celular:justify-end celular:text-sm">
      <div className="md:container mx-auto py-4">
        <div className="flex flex-row md:px-36 justify-between celular:px-0">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <Image src="/Mark.svg" alt="Logo" width={40} height={40} />
            </a>
            <Link href="/suggestions">
              <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 ml-16 rounded-md font-medium">Sugerencias</a>
            </Link>
          </div>
          <div className="flex flex-row items-center celular:space-x-1 md:space-x-10">
            <Link href="/login">
              <button className="flex justify-center items-center hover:bg-gray-100 px-3 h-8 rounded-md text-gray-500 font-medium">
                Inicia sesión
              </button>
            </Link>
            <Link href="/register">
              <button className="flex justify-center items-center text-white hover:bg-bluepotatohover h-8 rounded-md w-28 bg-bluepotato font-medium">
                Regístrate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}