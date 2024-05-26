import './App.css'
import UserListComponent from "./components/UserListComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HelloWorld from "./components/HelloWorld.jsx";
import UserComponent from "./components/UserComponent.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <HeaderComponent />
            <Routes>
                {/* http://localhost:3000 */}
                <Route path='/' element={<HelloWorld />} />
                {/* http://localhost:3000/users */}
                <Route path='/users' element={<UserListComponent />} />
                {/* http://localhost:3000/add-user */}
                <Route path='/add-user' element={<UserComponent />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    </>
  )
}

export default App
