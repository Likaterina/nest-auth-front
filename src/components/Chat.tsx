import React, { useState, useEffect, useReducer } from "react"

import { HOST } from "./constants"

import * as tokenService from "./tokenService"

interface IProps {
  currentUser: object
}
export const Chat = () => {
  useEffect(() => {
    const token = tokenService.getToken()

    if (!token) return
  })

  return (
      <h1>Unbelievable, here is nothing!</h1>
  )
}
