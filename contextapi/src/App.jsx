import './App.css'
import Login from './comp/login'
import Profile from './comp/profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
