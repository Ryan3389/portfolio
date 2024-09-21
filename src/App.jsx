import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
const App = () => {
    return (
        <>
            <Navbar />
            <main className='portfolio-container'>
                <Outlet />
            </main>
        </>
    )
}

export default App