import React from 'react'
import styled from 'styled-components'
import { useMutation } from '@apollo/client'
import { ADD_PARTY, ADD_FILTER } from '../apollo/gql'

type myProp = {
  className?: any,
  imgUrl?: string,
  id: string,
  name?: string
}


function ElCard({ className = {}, imgUrl = '', name = '', id }: myProp) {
	const [addFilter] = useMutation(ADD_FILTER, {variables: {id}})
	let [_name] = name.match(/rick|morty/gi) || []
	const [ addParty ] = useMutation(ADD_PARTY, {
		variables: {
			person: _name && _name.toLowerCase(),
			link: imgUrl
		}
	})
	return (
		<div className={className}>
			<button onClick={() => addFilter()} className='close'>
				<img src={require('../assets/vector.svg')} alt='close' />
			</button>
			<div className='imageBox' onClick={() => {
				if(_name) addParty()
			}} >
				<img src={imgUrl} alt='test' className='image' />
			</div>
		</div>
	)
}

export default styled(ElCard)`
  padding: 15px;
  position: relative;
  .imageBox {
    border: 1px solid black;
    width: 180px;
    height: 220px;
  }
  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .close {
    position: absolute;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 20px;
    right: 20px;
    background-color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`
