import React, { useState } from 'react'
import PropTypes from 'prop-types'

function ThreadComment ({ threadId, addComment }) {
  const [content, setContent] = useState('')

  function handleContentChange ({ target }) {
    setContent(target.value)
  }

  function handleCommentSubmit () {
    if (content.trim()) {
      addComment(threadId, content)
      setContent('')
    }
  }

  return (
    <div className="thread-comment">
      <textarea
        placeholder="Leave a comment..."
        value={content}
        onChange={handleContentChange}
      />
      <button type="button" onClick={handleCommentSubmit}>
        Comment
      </button>
    </div>
  )
}

ThreadComment.propTypes = {
  threadId: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
}

export default ThreadComment
