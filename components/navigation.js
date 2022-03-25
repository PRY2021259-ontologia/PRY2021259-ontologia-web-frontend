import Link from "next/link"
import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className="flex flex-col sticky top-0 z-10 shadow-md items-center bg-white border-b-2">
      <div className="container py-4">
        <div className="flex flex-row px-2.5 justify-around">
          <div className="flex items-center">
            <a href="/">
              <Image src="/Mark.svg" alt="Logo" width={40} height={40} />
            </a>
            <Link href="/suggestions">
              <button className="ml-16 text-bluepotato font-medium">Sugerencias</button>
            </Link>
          </div>
          <div className="flex flex-row space-x-10">
            <Link href="/login">
              <button className="rounded-md text-gray-500">
                Inicia sesión
              </button>
            </Link>
            <Link href="/register">
              <button className="rounded-md w-28 bg-bluepotato text-white">
                Regístrate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}