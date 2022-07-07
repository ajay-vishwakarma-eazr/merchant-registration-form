import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function ProtectedRoutes({ Component }) {
  const history = useNavigate()
  const { details } = useSelector(state => state.login)
  useEffect(() => {
    if (details !== 'success') {
      history('/')
    }
  }, [])

  return <Component />
}
