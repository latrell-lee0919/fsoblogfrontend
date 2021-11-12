import React, { useRef } from 'react'
import Togglable from './Togglable'
import blogService from '../services/blogs'

const Blog = ( { blog, setBlogs, blogs } ) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const handleLike = async (id) => {
    const blog = blogs.find(b => b.id === id)
    const newLikes = blog.likes + 1
    const newBlog = { ...blog, likes: newLikes }
    const updatedBlog = await blogService.update(id, newBlog)
    setBlogs(blogs.map(blog => blog.id !== id ? blog : updatedBlog))
    console.log(updatedBlog)
  }

  const handleRemove = async (id) => {
    const blog = blogs.find(b => b.id === id)
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await blogService.remove(id)
      setBlogs(blogs.filter(blog => blog.id !== id))
    }
  }

  const blogRef = useRef()

  const blogDetail = () => (
    <Togglable buttonLabel="view" hideButtonLabel="hide" ref={blogRef}>
      <div>
        <div>{blog.url}</div>
        <div>likes {blog.likes}
          <button onClick={() => handleLike(blog.id)}>like</button>
        </div>
        <div>{blog.author}</div>
        <button onClick={() => handleRemove(blog.id)}>remove</button>
      </div>
    </Togglable>
  )

  return (
    <div style={blogStyle}>
      <div>
        {blog.title} {blog.author}
      </div>
      {blogDetail()}
    </div>
  )}

export default Blog