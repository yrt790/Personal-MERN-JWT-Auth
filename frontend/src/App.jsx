import {Outlet} from "react-router-dom"
import NavBar from "./components/NavBar"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
    <NavBar />
    <ToastContainer />
    <main>
      <Outlet />
    </main>
    </>
  )
}
export default App