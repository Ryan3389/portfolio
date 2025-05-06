import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-40 bg-[#1A1A1ACC] backdrop:blur-lg border-b border-white/10 shadow-lg">
            <article className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">Ryan <span className="text-blue-500">Cuthbert</span>
                    </a>

                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>&#9776;</div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link to={'/'} className="text-gray-300 hover:text-white transition-colors">Home</Link>
                        <Link to={'/about'} className="text-gray-300 hover:text-white transition-colors">About</Link>
                        <Link to={'/projects'} className="text-gray-300 hover:text-white transition-colors">Projects</Link>
                        <Link to={'/contact'} className="text-gray-300 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </article>
        </nav>

    )
}

export default Navbar
// import { Link } from "react-router-dom"

// const Navbar = () => {
//     return (
//         <header>
//             <nav>
//                 <p>Ryan Cuthbert</p>
//                 <span className="nav-links">
//                     <Link to={'/'} className="nav-link">Home</Link>
//                     <Link to={'/projects'} className="nav-link">Projects</Link>
//                     <Link to={'/resume'} className="nav-link">Resume</Link>
//                     <Link to={'/contact'} className="nav-link">Contact</Link>
//                 </span>
//             </nav>
//         </header>
//     )
// }

// export default Navbar
