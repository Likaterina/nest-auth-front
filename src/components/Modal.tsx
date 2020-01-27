import React, { useState, useEffect, ReactNode } from "react"
import ReactDOM, { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode
  onClose: any
  open: any
}

export const Modal = (props: PortalProps) => {
  if (props.open) {
    return ReactDOM.createPortal(
      <div>
        <div onClick={props.onClose}></div>
        {props.children}
      </div>,
      document.body
    )
  } else {
    return null
  }
}
