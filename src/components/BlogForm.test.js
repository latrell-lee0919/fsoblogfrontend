import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

test('form calls event handler', () => {
  const createBlog = jest.fn()

  const component = render(
    <BlogForm createBlog={createBlog} />
  )

  const author = component.container.querySelector('.author')
  const title = component.container.querySelector('.title')
  const url = component.container.querySelector('.url')
  const form = component.container.querySelector('form')

  fireEvent.change(author, {
    target: { value: 'Mr. Test' }
  })

  fireEvent.change(title, {
    target: { value: 'Testing the form' }
  })

  fireEvent.change(url, {
    target: { value: 'testing.com' }
  })

  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
  console.log(createBlog.mock.calls)
  expect(createBlog.mock.calls[0][0].author).toBe('Mr. Test')

})