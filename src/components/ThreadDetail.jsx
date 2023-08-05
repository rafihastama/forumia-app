import React from 'react'
import PropTypes from 'prop-types'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import { postedAt } from '../utils'
import { asyncUpvoteThread, asyncDownvoteThread } from '../states/threadDetail/action'
import { useDispatch, useSelector } from 'react-redux'
import CommentItem from './CommentItem'

function ThreadDetail ({ id, title, body, category, createdAt, owner, comments }) {
  const dispatch = useDispatch()
  const voteThread = useSelector((state) => state.threadVotes[id] || 0)

  const handleUpvoteThread = () => {
    dispatch(asyncUpvoteThread(id))
  }

  const handleDownvoteThread = () => {
    dispatch(asyncDownvoteThread(id))
  }

  return (
    <section className="thread-detail">
      <header>
        <img src={owner?.avatar} alt={owner} />
        <div className="thread-detail__user-info">
          <p className="thread-detail__user-name">{owner?.name}</p>
          <p className="thread-detail__user-id">@{owner?.id}</p>
        </div>
      </header>
      <article>
        <p className="thread-detail__category">#{category}</p>
        <h3 className="thread-detail__title">{title}</h3>
        <p className="thread-detail__body" dangerouslySetInnerHTML={{ __html: body }} />
      </article>
      <footer>
        <div className="thread-detail__vote">
          <button type="button" onClick={handleUpvoteThread}>
            {voteThread === 1 ? <FaThumbsUp style={{ color: 'red' }} /> : <FaThumbsUp />}
          </button>
          <p className="thread-detail__vote-count">{voteThread === 1 ? 1 : 0}</p>
          <button type="button" onClick={handleDownvoteThread}>
            {voteThread === -1 ? <FaThumbsDown style={{ color: 'red' }} /> : <FaThumbsDown />}
          </button>
          <p className="thread-detail__vote-count">{voteThread === -1 ? 1 : 0}</p>
        </div>
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
      </footer>

      <div className="comments-section">
        <h3 className='comments-title'>Comments: {comments.length}</h3>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} threadId={id} createdAt={comment.createdAt} />
        ))}
      </div>
    </section>
  )
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      owner: PropTypes.shape(userShape).isRequired
    })
  ).isRequired
}

export default ThreadDetail
