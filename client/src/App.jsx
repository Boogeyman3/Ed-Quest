
import Admindashboard from "./assets/components/AdminNav"
import Sidebar from "./assets/components/Sidebar"
import Home from "./assets/components/pages/Home"
import './App.css'
function App() {


  return (
    <>
  <div className="App-container">
   <Admindashboard/>
   <Sidebar/>
   <Home/>
   </div> 
    </>
  )
}

export default App
