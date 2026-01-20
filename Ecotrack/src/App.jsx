import { useState } from 'react'

import './App.css'
import Dashboard from './pages/dashboard.jsx'  
import Logs from './pages/Logs.jsx'
function App() {
  return (
    <>
<div>
  <Dashboard />
  <Logs />
</div>
    </>
  )
}

export default App