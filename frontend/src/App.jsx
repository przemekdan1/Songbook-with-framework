import './App.css'
import UserListComponent from "./components/users/UserListComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import UserComponent from "./components/users/UserComponent.jsx";
import SidebarComponent from "./components/loginsites/SidebarComponent.jsx";
import LoginComponent from "./components/loginsites/LoginComponent.jsx";
import RegisterComponent from "./components/loginsites/RegisterComponent.jsx";
import CategoryList from "./components/CategoryList.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <>
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    </>
  )
}

function Layout(){
    const location = useLocation();

    return (
        <>
            {location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register' ? (
                <div className="auth-layout">
                    <SidebarComponent />
                    <Routes>
                        {/* http://localhost:3000 */}
                        <Route path='/' element={<LoginComponent />} />
                        {/* http://localhost:3000/login */}
                        <Route path="/login" element={<LoginComponent />} />
                        {/* http://localhost:3000/register */}
                        <Route path="/register" element={<RegisterComponent />} />
                    </Routes>
                </div>
            ) : (
                <>
                    <HeaderComponent />
                    <div className="main-content">
                        <Routes>
                            {/* http://localhost:3000/users */}
                            <Route path='/users' element={<UserListComponent />} />
                            {/* http://localhost:3000/add-user */}
                            <Route path='/add-user' element={<UserComponent />} />
                            {/* http://localhost:3000/update-user/1 */}
                            <Route path='/update-user/:id' element={<UserComponent />} />
                            {/* http://localhost:3000/home */}
                            <Route path="/home" element={<HomePage />} />
                        </Routes>
                    </div>
                    <FooterComponent />
                </>
            )}
        </>
    );
}

export default App
