/**
 * scenario test
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { asyncPreloadProcess } from './action'
import { setAuthUserActionCreator } from '../authUser/action'

const fakeUsersResponse = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg'
  }
]

const fakeErrorResponse = new Error('Something Went Wrong!')

describe('asyncPreloadProcess thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile
  })

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile

    delete api._getOwnProfile
  })

  it('should dispatch action correctly when data fetching success', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeUsersResponse)

    const dispatch = vi.fn()

    await asyncPreloadProcess()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeUsersResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse)

    const dispatch = vi.fn()

    await asyncPreloadProcess()(dispatch)

    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})
