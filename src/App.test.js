import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import App from './App'
import { GET_PARTY } from './apollo/gql'
import resolvers from './apollo/resolvers'

const mocks = [
  {
    request: {
      query: GET_PARTY,
    },
    result: {
      data: {
        __typename: 'Root',
        party: {
          __typename: 'Party',
          rick: 'test rick',
          morty: 'test morty',
        },
      },
    },
  },
]

afterEach(cleanup)

test('renders learn react link', () => {
  const { getByTestId } = render(
    <MockedProvider mocks={mocks} resolvers={resolvers} addTypename={false}>
      <App />
    </MockedProvider>
  )
  // expect(getByTestId('test')).toHaveClass('main3')
})
