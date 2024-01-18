import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

interface Props{
    children:React.ReactNode
}
const Layout=({children}:Props)=>{
    return (
        <div className="flex min-h-screen flex-col"><Header/>
        <Hero/>
        <div className="container mx-auto py-10 flex-1">{children}</div>
        <Footer/> </div>
    )
}
export default Layout