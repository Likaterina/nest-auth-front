import React, { Props, useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import {
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom"
import axios from "axios"
import { Login } from "./components/Login"
import { Register } from "./components/Register"
import { Chat } from "./components/Chat"
import * as tokenService from "./components/tokenService"
import { HOST } from "./components/constants"

const App = () => {
  const [user, setUser] = useState("")
  const [currentLogin, setCurrentLogin] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  let history = useHistory()

  const getAndSetUser = () => {
    const token = tokenService.getToken()
    console.log(token)
    if (token) {
      setUser(token)
    }
  }

  const loginRequest = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(HOST)
    e.preventDefault()
    axios
      .post(`${HOST}/auth/login`, {
        username: currentLogin,
        password: currentPassword
      })
      .then(res => {
        tokenService.setToken(res.data.accessToken)
        console.log(res.data)
        getAndSetUser()
        window.location.replace("/")
      })
    setCurrentLogin("")
    setCurrentPassword("")
  }

  const registerRequest = (e: React.FormEvent<HTMLFormElement>): void => {
    console.log(HOST)
    e.preventDefault()
    axios
      .post(`${HOST}/auth/registration`, {
        username: currentLogin,
        password: currentPassword
      })
      .then(res => {
        tokenService.setToken(res.data.accessToken)
        getAndSetUser()
        window.location.replace("/")
      })
    setCurrentLogin("")
    setCurrentPassword("")
  }

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentLogin(e.target.value)
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentPassword(e.target.value)
  }

  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/registration">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/">Chat</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/registration">
          <Register
            registerRequest={registerRequest}
            currentLogin={currentLogin}
            currentPassword={currentPassword}
            handleLogin={handleLogin}
            handlePassword={handlePassword}
          />
        </Route>
        <Route exact path="/login">
          <Login
            loginRequest={loginRequest}
            currentLogin={currentLogin}
            currentPassword={currentPassword}
            handleLogin={handleLogin}
            handlePassword={handlePassword}
          />
        </Route>
        <PrivateRoute path="/">
          <Chat  />
        </PrivateRoute>
      </Switch>
    </div>
  )
}

function PrivateRoute({ children, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        const token = tokenService.getToken()
        if (!token) {
          return <Redirect to="/login" />
        }
        return children
      }}
    />
  )
}

export default App
