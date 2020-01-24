import React, { useState, useEffect } from "react"
import * as tokenService from "./tokenService"
import { withFormik, FormikProps, FormikErrors, Form, Field } from "formik"
import Input from "../styles/input"
import InputWrapper from "../styles/InputWrapper"
import Button from "../styles/Button"
import Wrapper from "../styles/Wrapper"
import Label from "../styles/Label"

interface IProps {
  registerRequest: (e: React.FormEvent<HTMLFormElement>) => void
  currentLogin: string
  handleLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentPassword: string
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Register = (props: IProps) => {
  useEffect(() => {
    const token = tokenService.getToken()
    if (token) {
      window.location.replace("/")
    }
  }, [])

  return (
    <Wrapper>
      <Label>Register user</Label>

      <form onSubmit={props.registerRequest}>
        <InputWrapper>
          <Input
            type="text"
            width={100}
            value={props.currentLogin}
            onChange={props.handleLogin}
            placeholder="Enter your login"
            autoFocus
          />
          <Input
            type="password"
            width={100}
            value={props.currentPassword}
            onChange={e => props.handlePassword(e)}
            placeholder="Enter your password"
          />
        </InputWrapper>
        <Button type="submit">Login</Button>
      </form>
    </Wrapper>
  )
}
