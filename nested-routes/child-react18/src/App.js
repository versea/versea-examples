import logo from './logo.svg'
import { useEffect } from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { containerController } from './container-controller'
import './App.css'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="child-vue/*" element={<ReactContainer />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

function Layout () {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/child-vue">Child-Vue</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
)

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
)

const ReactContainer = () => {
  useEffect(() => {
    containerController.resolve('react-container')
    return () => {
      if (containerController.has('react-container')) {
        containerController.reject('react-container')
        containerController.delete('react-container')
      }
    }
  })

  return (
    <div>
      <h2>ReactContainer</h2>
      <div id="react-container"></div>
    </div>
  )
}

export default App
