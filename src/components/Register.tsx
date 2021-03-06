import React, { useState, useEffect } from "react"
import * as tokenService from "./tokenService"
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  Formik,
  useFormik
} from "formik"
import styled, { ThemeProvider } from "styled-components"

import Input from "../styles/Input"
import InputWrapper from "../styles/InputWrapper"
import Button from "../styles/Button"
import Wrapper from "../styles/Wrapper"
import Title from "../styles/Title"
import { SignupSchema } from "./Yup.Schema"
import Error from "../styles/Error"
import { Modal } from "./Modal"
import PortalButton from "../styles/PortalButton"
import Portal from "../styles/Portal"
import { CheckBox, ToggleButton } from "../styles/ToggleButton"

interface IProps {
  registerRequest: (payload: any) => void
  currentLogin: string
  handleLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentPassword: string
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Register = (props: IProps) => {
  const [showModal, setModal] = useState(false)
  const [changeTheme, setChangeTheme] = useState(false)

  const toggleModal = () => setModal(!showModal)

  const toggleTheme = () => setChangeTheme(!changeTheme)

  useEffect(() => {
    const token = tokenService.getToken()
    if (token) {
      window.location.replace("/")
    }
  }, [])

  return (
    <Wrapper id="wrapper">
      <ToggleButton
        id="checkbox"
        type="checkbox"
        onChange={toggleTheme}
        checked={changeTheme}
      />
      <CheckBox htmlFor="checkbox" />
      <Title>Register user</Title>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          props.registerRequest(values)
          console.log(values, actions)
          actions.setSubmitting(false)
        }}
        render={formikBag => {
          console.log(formikBag)
          return (
            <form>
              <InputWrapper>
                <Field
                  name="username"
                  render={({ field, meta }: { field: any; meta: any }) => (
                    <div>
                      <Input
                        type="text"
                        width={100}
                        value={props.currentLogin}
                        onChange={props.handleLogin}
                        placeholder="Enter your login"
                        autoFocus
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <Error>{meta.error}</Error>
                      )}
                    </div>
                  )}
                />
                <Field
                  name="password"
                  render={({ field, meta }: { field: any; meta: any }) => {
                    return (
                      <div>
                        <Input
                          type="password"
                          width={100}
                          value={props.currentPassword}
                          onChange={props.handlePassword}
                          placeholder="Enter your password"
                          {...field}
                        />
                        {meta.touched && meta.error && (
                          <Error>{meta.error}</Error>
                        )}
                      </div>
                    )
                  }}
                />
              </InputWrapper>
              <Button onClick={formikBag.submitForm}>Login</Button>
            </form>
          )
        }}
      />

      <React.Fragment>
        <Modal open={showModal} onClose={toggleModal}>
          <Portal>
            {" "}
            <Button>Close me!</Button>
          </Portal>
        </Modal>

        <PortalButton onClick={toggleModal} marginLeft={100}>
          Push Me!
        </PortalButton>
      </React.Fragment>
    </Wrapper>
  )
}
