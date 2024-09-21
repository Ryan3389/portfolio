
const Navbar = () => {
    return (
        <nav className="  bg-white  border-gray-200 w-screen  text-gray-900 h-[10vh]">

            <div className="flex flex-wrap items-center justify-between mx-auto p-4 w-[80%]">
                <span className="self-center text-2xl font-semibold dark:text-white">Ryan Cuthbert</span>
                <div>
                    <a className="py-2 px-3 cursor-pointer">Home</a>
                    <a className="py-2 px-3 cursor-pointer">Portfolio</a>
                    <a className="py-2 px-3 cursor-pointer">Resume</a>
                    <a className="py-2 px-3 cursor-pointer">Contact</a>
                </div>

            </div>

        </nav>
    )
}

export default Navbar