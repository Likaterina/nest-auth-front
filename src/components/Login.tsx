import React, { useState, useEffect, Props } from "react"
import * as tokenService from '../components/tokenService';

interface IProps {
    loginRequest: (e: React.FormEvent<HTMLFormElement>) => void,
    currentLogin: string,
    handleLogin: (e: React.ChangeEvent<HTMLInputElement>) => void,
    currentPassword: string,
    handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Login = (props: IProps) => {

    useEffect(() => {
        const token = tokenService.getToken()
        console.log(token)
        if (token) {
            window.location.replace('/');
        }

    }, [])

    return (
      <div>
        <h2>Enter your login and password</h2>
        <form onSubmit={props.loginRequest}>
          <input
            type="text"
            value={props.currentLogin}
            onChange={props.handleLogin}
            placeholder="Enter your login"
            autoFocus
          />
          <input
            type="password"
            value={props.currentPassword}
            onChange={e => props.handlePassword(e)}
            placeholder="Enter your password"
          />
          <button type="submit" >Login</button>
        </form>

      </div>
    )
  }