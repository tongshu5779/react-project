import React from 'react'
import {NavLink} from 'react-router-dom'
/*
自定义NavLink: 包装NavLink
 */
export default function MyNavLink(props) {
  return <NavLink {...props} activeClassName='myActive'/>
}