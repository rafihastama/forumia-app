/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given the RECEIVE_USERS action
 *
 */

import { describe, it, expect } from 'vitest'
import usersReducer from './reducer'

describe('usersReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    const initialState = []
    const action = { type: 'UNKNOWN' }

    const nextState = usersReducer(initialState, action)

    expect(nextState).toEqual(initialState)
  })

  it('should return the users when given the RECEIVE_USERS action', () => {
    const initialState = []
    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'John Doe',
            email: 'john@example.com'
          },
          {
            id: 'user-2',
            name: 'Jane Smith',
            email: 'jane@example.com'
          }
        ]
      }
    }

    const nextState = usersReducer(initialState, action)

    expect(nextState).toEqual(action.payload.users)
  })
})
