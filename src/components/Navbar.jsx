import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="  bg-white  border-gray-200 w-screen  text-gray-900 h-[10vh]">

            <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-[80%]">
                <span className="self-center text-2xl font-semibold dark:text-white">Ryan Cuthbert</span>
                <div>
                    <Link to='/' className="py-2 px-3 cursor-pointer">Home</Link>
                    <Link to='/projects' className="py-2 px-3 cursor-pointer">Projects</Link>
                    <Link to='/resume' className="py-2 px-3 cursor-pointer">Resume</Link>
                    <Link to='/contact' className="py-2 px-3 cursor-pointer">Contact</Link>
                </div>

            </div>

        </nav>
    )
}

export default Navbar