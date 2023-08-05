import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ThreadInput ({ addThread }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [body, setBody] = useState('')

  function addThreadHandler () {
    if (title.trim() && category.trim() && body.trim()) {
      addThread({ title, category, body })
      setTitle('')
      setCategory('')
      setBody('')
    }
  }

  function handleTitleChange ({ target }) {
    setTitle(target.value)
  }

  function handleCategoryChange ({ target }) {
    setCategory(target.value)
  }

  function handleBodyChange ({ target }) {
    setBody(target.value)
  }

  return (
    <div className="thread-input">
      <h1>Create a Thread</h1>
      <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <input type="text" placeholder="Category" value={category} onChange={handleCategoryChange} />
      <textarea type="text" placeholder="Content" value={body} onChange={handleBodyChange} />
      <p className="thread-input__char-left">
        <strong>{body.length}</strong>
        /320
      </p>
      <button type="submit" onClick={addThreadHandler}>
        Thread
      </button>
    </div>
  )
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired
}

export default ThreadInput
