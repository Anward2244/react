import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Order_items, Items } from './App'
// import { Greeting,UserList } from './components/users'
import TimerApp from './components/timer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimerApp/>
  </StrictMode>,
)
