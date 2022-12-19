import Footer from "./components/Footer"
import Nav  from "./components/Nav"
import Main from "./components/Main"
import Popups from "./components/Popups"
import { useContext } from "react"
import { Context } from "./Context/Context"
import  SideBar from "./components/SideBar";


function App() {

  const {popupActive,sideBarActive} = useContext(Context);

  return (
    <main>
      <SideBar/>
       {sideBarActive && <div className="bg"></div>}
      <Nav/>
      <Main/>
      <Footer/>
      {popupActive && 
      <>
        <Popups/>
        <div className="bg"></div>
      </>}
    </main>
  )
}

export default App
