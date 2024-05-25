import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from "./components/HelloWorld.jsx";
import UserListComponent from "./components/UserListComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

function App() {
  return (
    <>
        <HeaderComponent />
        <UserListComponent />
        <FooterComponent />
    </>
  )
}

export default App
