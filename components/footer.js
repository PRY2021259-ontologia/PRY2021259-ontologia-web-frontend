import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faGithub,
    faDribbble
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="mt-auto bg-white">
            <div className='flex justify-around px-12 py-9 border-t-2 border-gray-200'>
                <p className="flex items-center text-gray-400">© 2022 PotatoOntology, Inc. All rights reserved.</p>
                <div className="space-x-10" >
                    <a href="https://www.facebook.com"
                        className="" >
                        <FontAwesomeIcon icon={faFacebook} size="2x" className='text-gray-400 hover:text-gray-500' />
                    </a>
                    <a href="https://www.instagram.com"
                        className="">
                        <FontAwesomeIcon icon={faInstagram} size="2x" className='text-gray-400 hover:text-gray-500' />
                    </a>
                    <a href="https://www.twitter.com"
                        className="">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className='text-gray-400 hover:text-gray-500' />
                    </a>
                    <a href="https://www.github.com/"
                        className="">
                        <FontAwesomeIcon icon={faGithub} size="2x" className='text-gray-400 hover:text-gray-500' />
                    </a>
                    <a href="https://www.dribbble.com/"
                        className="">
                        <FontAwesomeIcon icon={faDribbble} size="2x" className='text-gray-400 hover:text-gray-500' />
                    </a>
                </div>
            </div>
        </footer>
    )
}