import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

function RootLayout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default RootLayout