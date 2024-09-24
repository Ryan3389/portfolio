import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { DataProvider } from './utils/Context';
import '../src/App.css'
const App = () => {
    return (
        <DataProvider>
            <Navbar />
            <main className='portfolio-container'>
                <Outlet />
            </main>
        </DataProvider>
    )
}

export default App