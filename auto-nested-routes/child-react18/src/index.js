import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let root = null

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

export function mount () {
  root = ReactDOM.createRoot(document.getElementById('child-react18'))
  root.render(
    <React.StrictMode>
      <BrowserRouter basename="/child-react18">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}

export function unmount () {
  root.unmount()
  root = null
}
