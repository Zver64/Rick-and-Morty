import React from 'react'
import styled from 'styled-components'

function ElSlot({className, imgUrl = ''} : {className: any, imgUrl : string}) {
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
`