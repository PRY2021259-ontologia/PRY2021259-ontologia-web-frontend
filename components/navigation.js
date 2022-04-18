import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-regular-svg-icons"

var button = null
var menu = null

if (typeof document !== 'undefined') {
  button = document.querySelector('#button.mobile-menu-button');
  menu = document.querySelector('#mobile-menu');
}

if (button && menu) {
  button.addEventListener('click', () => {
    console.log('clickeado');
    menu.classList.toggle('hidden');
  });
}


export default function Navigation() {
  return (
    <nav className="inset-x-0 sticky top-0 z-10 shadow-md md:justify-center items-center bg-white celular:text-sm md:text-base">
      <div className="flex-row py-4 md:w-2/3 mx-auto celular:px-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row md:space-x-10">
            <a href="/" className="flex items-center">
              <img className=" md:w-10 md:h-10" src="/Mark.svg" alt="Logo" />
            </a>
            <div className="flex items-center">
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
          <div className="flex flex-row items-center celular:space-x-1 md:space-x-6">
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
            <button className="outline-none" id="mobile-menu-button">
              <svg
                className="w-10 h-10 text-gray-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden rounded-lg shadow-lg" id="mobile-menu">
        <div className="block px-6">
          <div className="pb-3">
            <Link href="/suggestions">
              <a className=" hover:bg-gray-100 text-bluepotato py-1 rounded-md font-medium">Sugerencias</a>
            </Link>
          </div>
          <div className="pb-3">
            <Link href="/definitionshistory">
              <a className=" hover:bg-gray-100 text-bluepotato py-1 rounded-md font-medium">Historial</a>
            </Link>
          </div>
          <div className="flex flex-row pb-3 justify-between items-center py-1">
            <div className="flex flex-row space-x-3">
              <img className="rounded-full" src="https://picsum.photos/40" />
              <div className="flex flex-col ">
                <p>Sebastian Alfaro</p>
                <p className="text-gray-600">sebas43243@hotmail.com</p>
              </div>
            </div>
            <div className="fa-xl text-gray-400">
              <FontAwesomeIcon icon={faBell} />
            </div>
          </div>
          <div className="pb-3"><a className=" hover:bg-gray-100 text-gray-500 py-1 rounded-md font-medium">Perfil</a></div>
          <div className="pb-4"><a className=" hover:bg-gray-100 text-gray-500 py-1 rounded-md font-medium">Salir</a></div>
        </div>
      </div>
    </nav >
  )
}

