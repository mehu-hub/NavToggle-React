import Dashboard from "./Components/Dashboard/Dashboard"
import Navbar from "./Components/Navbar/Navbar"
import PhoneBar from "./Components/PhoneBar/PhoneBar"
import PriceList from "./Components/PriceList/PriceList"

function App() {

  return (
    <div className='container mx-auto'>
      <Navbar /> 
      <PriceList />
      <Dashboard/>
      <PhoneBar/>
    </div>
  )
}

export default App
