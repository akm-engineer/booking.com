


import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Register from './pages/Register'

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Layout>
          <p>Home Page</p>
        </Layout>}/>
        <Route path='/register' element={<Layout><Register/></Layout>}/>
      </Routes>
    </Router>
  )
}

export default App
