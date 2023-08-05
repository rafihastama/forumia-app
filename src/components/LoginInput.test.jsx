/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react'
import {
  describe, it, expect, afterEach, vi
} from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import LoginInput from './LoginInput'

expect.extend(matchers)

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle username typing correctly', async () => {
    render(<LoginInput login={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'lucius@gmail.com')

    expect(emailInput).toHaveValue('lucius@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    render(<LoginInput login={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.type(passwordInput, 'lucius')

    expect(passwordInput).toHaveValue('lucius')
  })

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn()
    render(<LoginInput login={mockLogin} />)
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'lucius@gmail.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'lucius')
    const loginButton = await screen.getByRole('button', { name: 'Login' })

    await userEvent.click(loginButton)

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'lucius@gmail.com',
      password: 'lucius'
    })
  })
})
