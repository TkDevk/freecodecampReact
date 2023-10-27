import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const name = "Duvanchin"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hola mundoso{name}</h1>)
