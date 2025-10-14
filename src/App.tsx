
import './App.css'
import Albums from './components/Albums'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Header from './components/Header'
import Layout from './components/Layout'
import Packages from './components/Packages'
import Reviews from './components/Reviews'

function App() {
 

  return (
    <div className='min-h-screen bg-gray-100'>
    <Header/>
    <Banner/>
    <Layout/>
    <Packages/>
    <Albums/>
    <Reviews/>
    <Footer/>
    </div>
  )
}

export default App
