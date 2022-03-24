import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'

export default function Navigation() {
  return (
    <nav className="flex flex-col relative items-center bg-white">
      <div className="container py-6">
        <div className="flex flex-row px-2.5 justify-around">
          <div className="flex items-center">
            <a href="/"
              className="text-bluepotato">
              <FontAwesomeIcon icon={faEthereum} size="3x" />
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