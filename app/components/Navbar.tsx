import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
    return (
        <nav className="bg-green-800 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl flex justify-between items-center mx-auto flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-yellow-500/90 no-underline hover:text-yellow-600">
                        Zabihullah
                        <span className="text-red-600">.</span>
                    </Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-3xl lg:text-4xl">
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaYoutube />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaLinkedin />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaGithub />
                    </Link>
                    <Link className="text-white/90 hover:text-white" href="">
                        <FaTwitter />
                    </Link>
                </div>
            </div>
        </nav>
    )
}