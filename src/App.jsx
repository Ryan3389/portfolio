import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import '../src/App.css'
import { LoadingScreen } from './pages/LoadingScreen';
const App = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <>
            {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
            <main className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-[#1A1A1A] text-gray-100`}>
                {/* <DataProvider> */}
                <Navbar />
                <Outlet />
                {/* </DataProvider> */}
            </main>

        </>
        // <DataProvider>
        //     <Navbar />
        //     <Outlet />
        // </DataProvider>
    )
}

export default App