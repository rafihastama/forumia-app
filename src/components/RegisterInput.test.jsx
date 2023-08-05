/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react'
import {
  describe, it, expect, afterEach, vi
} from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import matchers from '@testing-library/jest-dom/matchers'
import RegisterInput from './RegisterInput'

expect.extend(matchers)

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup()
  })

  it('should handle name typing correctly', async () => {
    render(<RegisterInput register={() => {}} />)
    const nameInput = await screen.getByPlaceholderText('Name')

    await userEvent.type(nameInput, 'luciuus')

    expect(nameInput).toHaveValue('luciuus')
  })

  it('should handle username typing correctly', async () => {
    render(<RegisterInput register={() => {}} />)
    const emailInput = await screen.getByPlaceholderText('Email')

    await userEvent.type(emailInput, 'luciuus@gmail.com')

    expect(emailInput).toHaveValue('luciuus@gmail.com')
  })

  it('should handle password typing correctly', async () => {
    render(<RegisterInput register={() => {}} />)
    const passwordInput = await screen.getByPlaceholderText('Password')

    await userEvent.type(passwordInput, 'luciuus')

    expect(passwordInput).toHaveValue('luciuus')
  })

  it('should call login function when login button is clicked', async () => {
    const mockRegister = vi.fn()
    render(<RegisterInput register={mockRegister} />)
    const nameInput = await screen.getByPlaceholderText('Name')
    await userEvent.type(nameInput, 'luciuus')
    const emailInput = await screen.getByPlaceholderText('Email')
    await userEvent.type(emailInput, 'luciuus@gmail.com')
    const passwordInput = await screen.getByPlaceholderText('Password')
    await userEvent.type(passwordInput, 'luciuus')
    const registerButton = await screen.getByRole('button', { name: 'Register' })

    await userEvent.click(registerButton)

    expect(mockRegister).toHaveBeenCalledWith({
      name: 'luciuus',
      email: 'luciuus@gmail.com',
      password: 'luciuus'
    })
  })
})
