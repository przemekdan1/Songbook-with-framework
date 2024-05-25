import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from "./components/HelloWorld.jsx";
import UserListComponent from "./components/UserListComponent.jsx";

function App() {
  return (
    <>
        <UserListComponent />
    </>
  )
}

export default App
