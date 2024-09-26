import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="bg-backgroundColor w-screen text-secondaryColor h-[10vh]">

            <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-[80%]">
                <span className="self-center text-2xl font-semibold dark:text-white">Ryan Cuthbert</span>
                <div>
                    <Link to='/' className="py-2 px-3 cursor-pointer font-bold nav-link">Home</Link>
                    <Link to='/projects' className="py-2 px-3 cursor-pointer font-bold nav-link">Projects</Link>
                    <Link to='/resume' className="py-2 px-3 cursor-pointer font-bold nav-link">Resume</Link>
                    <Link to='/contact' className="py-2 px-3 cursor-pointer font-bold nav-link">Contact</Link>
                </div>

            </div>

        </nav>
    )
}

export default Navbar