import React from 'react'
import styled from 'styled-components'

type elSlotProp = {
  className?: string,
  imgUrl?: string
}

function ElSlot({className, imgUrl = ''}: elSlotProp) {
  const image = () => {
    if(imgUrl) {
      return <img src={imgUrl} alt="test" />
    }
  }
  return(
    <div className={className}>
      {image()}
    </div>
  )
}

export default styled(ElSlot)`
  width: 180px;
  height: 220px;
  background-color: #DADADA;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`