import './App.css'
import UserListComponent from "./components/UserListComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HelloWorld from "./components/HelloWorld.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <HeaderComponent />
                <Routes>
                    <Route path='/' element={<HelloWorld/>} />
                    <Route path='/users' element={<UserListComponent/>} />
                </Routes>
            <FooterComponent />
        </BrowserRouter>
    </>
  )
}

export default App
