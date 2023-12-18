import Dashboard from "./Components/Dashboard/Dashboard"
import Navbar from "./Components/Navbar/Navbar"
import PriceList from "./Components/PriceList/PriceList"

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar /> 
      <PriceList />
      <Dashboard/>
    </div>
  )
}

export default App
