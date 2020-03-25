import React from 'react'
import styled from 'styled-components'

const Comp = ({ placeholder, className }) => (
  <input className={className} placeholder={placeholder} />
)
export default styled(Comp)`
  width: 100%;
  padding: 22px 27px;
  background: #ffffff;
  border: 1px solid #a0a0a0;
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
`
