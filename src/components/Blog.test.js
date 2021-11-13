import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'testing',
    author: 'Mr. Test',
    url: 'testing.com'
  }

  const component = render(
    <Blog blog={blog} />
  )

  const blogContent = component.container.querySelector('.blog')

  console.log(prettyDOM(blogContent))

  expect(blogContent).toHaveTextContent(
    'testing Mr. Test'
  )
})

test('clicking the button shows details', () => {
  const blog = {
    title: 'testing',
    author: 'Mr. Test',
    url: 'testing.com'
  }

  const component = render(
    <Blog blog={blog} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const div = component.container.querySelector('.viewable')
  expect(div).toBeDefined()
})

test('clicking the like button triggers handler', () => {
  const blog = {
    title: 'testing',
    author: 'Mr. Test',
    url: 'testing.com'
  }

  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} handleLike={mockHandler}/>
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  const likeButton = component.container.querySelector('.like')
  fireEvent.click(likeButton)
  fireEvent.click(likeButton)

  expect(mockHandler.mock.calls).toHaveLength(2)
})