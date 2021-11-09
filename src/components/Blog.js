import React, { useRef } from 'react'
import Togglable from './Togglable'

const Blog = ( {blog} ) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  
  const blogRef = useRef()

  const blogDetail = () => (
      <Togglable buttonLabel="view" hideButtonLabel="hide" ref={blogRef}>
        <div>
          <div>{blog.url}</div>
          <div>likes {blog.likes}</div>
          <div>{blog.author}</div>
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