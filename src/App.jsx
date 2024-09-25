import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { DataProvider } from './utils/Context';
import '../src/App.css'
const App = () => {
    return (
        <DataProvider>
            <Navbar />
            <Outlet />
        </DataProvider>
    )
}

export default App