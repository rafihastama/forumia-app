import React from 'react'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { postedAt } from '../utils'
import { asyncUpvoteComment, asyncDownvoteComment } from '../states/threadDetail/action'

function CommentItem ({ comment, threadId, createdAt }) {
  const voteComment = useSelector((state) => state.commentVotes[threadId]?.[comment.id] || 0)
  const dispatch = useDispatch()

  const handleUpvoteComment = (commentId) => {
    dispatch(asyncUpvoteComment(threadId, commentId))
  }

  const handleDownvoteComment = (commentId) => {
    dispatch(asyncDownvoteComment(threadId, commentId))
  }

  return (
    <div key={comment.id} className="comment">
        <div className='comment__user-photo'>
            <img className="comment-author__image" src={comment?.owner?.avatar} alt={comment?.owner?.name} />
        </div>
        <div className="comment__content">
            <p className="comment__author">{comment?.owner?.name}</p>
            <p className="comment__text" dangerouslySetInnerHTML={{ __html: comment.content }} />
            <footer>
            <div className="comment-detail__vote">
                <button type="button" onClick={() => handleUpvoteComment(comment.id)}>
                {voteComment === 1 ? <FaThumbsUp style={{ color: 'red' }} /> : <FaThumbsUp />}
                </button>
                <p className="talk-detail__vote-count">{voteComment === 1 ? 1 : 0}</p>

                <button type="button" onClick={() => handleDownvoteComment(comment.id)}>
                {voteComment === -1 ? <FaThumbsDown style={{ color: 'red' }} /> : <FaThumbsDown />}
                </button>
                <p className="talk-detail__vote-count">{voteComment === -1 ? 1 : 0}</p>
            </div>
            <p className="comment__created-at">{postedAt(createdAt)}</p>
            </footer>
        </div>
    </div>
  )
}

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  threadId: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
}

export default CommentItem
