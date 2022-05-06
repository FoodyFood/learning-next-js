// Next.js Imports
import Link from 'next/link'

// React Imports
import {useState} from 'react'


function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}


function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <Link href="/">
                    <a className="text-xl font-semibold">FoodyFood</a>
                </Link>
            </div>
            <div className="flex flex-col ml-4">
                <Link href="/">
                    <a className="text-xl font-medium my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Home
                    </a>
                </Link>
                <Link href="/dashboard">
                    <a className="text-xl font-medium my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Dashboard
                    </a>
                </Link>
                <Link href="/projects">
                    <a className="text-xl font-medium my-4" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                        Projects
                    </a>
                </Link>
            </div>  
        </div>
    )
}


export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <Link href="/">
                    <a className="text-2xl font-semibold">FoodyFood</a>
                </Link>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">

                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/dashboard">
                        Dashboard
                    </NavLink>
                    <NavLink to="/projects">
                        Projects
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}