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
import Input from "../styles/Input"
import InputWrapper from "../styles/InputWrapper"
import Button from "../styles/Button"
import Wrapper from "../styles/Wrapper"
import Title from "../styles/Title"
import { SignupSchema } from "./Yup.Schema"
import Error from "../styles/Error"
import { Modal } from "./Modal"
import PortalButton from "../styles/PortalButton"

interface IProps {
  registerRequest: (payload: any) => void
  currentLogin: string
  handleLogin: (e: React.ChangeEvent<HTMLInputElement>) => void
  currentPassword: string
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Register = (props: IProps) => {
  const [showModal, setModal] = useState(false)

  const toggleModal = () => setModal(!showModal)

  useEffect(() => {
    const token = tokenService.getToken()
    if (token) {
      window.location.replace("/")
    }
  }, [])

  return (
    <Wrapper id="wrapper">
      <Title>Register user</Title>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          props.registerRequest(values)
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
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
                          onChange={e => props.handlePassword(e)}
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
          <Button>I am portal!</Button>
        </Modal>
        <PortalButton onClick={toggleModal} marginLeft={100}>
          Push Me!
        </PortalButton>
      </React.Fragment>
    </Wrapper>
  )
}
