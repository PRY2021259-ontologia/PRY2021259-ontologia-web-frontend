import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Header({ session }) {

    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="flex flex-row justify-between z-[3]">
                <div className="flex flex-row md:space-x-10">
                    <a href="/" className="flex items-center">
                        <img className="celular:w-9 celular:h-9" src="/Mark.svg" alt="Logo" />
                    </a>
                    <div className="celular:hidden md:flex items-center md:space-x-10">
                        <div>
                            <Link href="/assistedsearch">
                                <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Busqueda guiada</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/suggestions">
                                <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium">Sugerencias</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/definitionshistory">
                                <a className=" hover:bg-gray-100 text-bluepotato px-3 py-1 rounded-md font-medium ">Historial</a>
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
                    <button onClick={() => signOut()}>
                        <img className="rounded-full w-[45px] h-[45px]" src={session.user.image} />
                    </button>
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