import {Link} from 'react-router-dom'
const Header=()=>{
    return (
        <div className="bg-black py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight"> 
                <Link to="/">MernHolidays.com</Link>
                </span>
                <span className='flex space-x-2'>
                    <Link to="/sign-in" className='flex border border-black bg-red-700 text-black font-bold items-center hover:text-red-500 hover:bg-black hover:border-red-600 rounded-sm px-3'> Sign In</Link>
                </span>
            </div>
        </div>
    )
}

export default Header