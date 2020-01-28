import React, { useState, useEffect, ReactNode } from "react"
import ReactDOM, { createPortal } from "react-dom"
import PortalButton from "../styles/PortalButton"
import Portal from "../styles/Portal"

interface PortalProps {
  children: ReactNode
  onClose: any
  open: any
}

export const Modal = (props: PortalProps) => {
  if (props.open) {
    return ReactDOM.createPortal(
      <Portal>
        <img
          src="https://i.ytimg.com/vi/fXez3kaseWE/maxresdefault.jpg"
          style={{ width: "400px", height: "400px" }}
        />
        <PortalButton onClick={props.onClose}>{props.children}X</PortalButton>
      </Portal>,
      document.body
    )
  } else {
    return null
  }
}
