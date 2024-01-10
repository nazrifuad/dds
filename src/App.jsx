import React from 'react'
import './css/main.css'
import Styleguide from './pages/Styleguide/Styleguide'
import HeaderRoutes from './components/Routes/HeaderRoutes'


// main
function App({children}) {
  return (
    <main className="main-content">
      <HeaderRoutes />
      {children}
    </main>
  )
}

export default App
