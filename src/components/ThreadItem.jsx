import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { postedAt } from '../utils'
import { FaReply } from 'react-icons/fa'

function ThreadItem ({ id, title, body, category, createdAt, owner, totalComments }) {
  const navigate = useNavigate()

  const onThreadClick = () => {
    navigate(`/threads/${id}`)
  }

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`)
    }
  }

  return (
    <div role="button" tabIndex={0} className=" thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__user-photo">
        <img src={owner?.avatar} alt={owner?.name} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{owner?.name}</p>
            <p className="thread-item__user-id">
              @
              {owner?.id}
            </p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="thread-item__category"><strong>#{category}</strong></p>
          <h3 className="thread-item__title">{title}</h3>
          <p className="thread-item__body" dangerouslySetInnerHTML={{ __html: body } }/>
        </article>
        <p className='thread__reply'><FaReply />{totalComments}</p>
      </div>
    </div>
  )
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape),
  totalComments: PropTypes.number.isRequired
}

ThreadItem.propTypes = {
  ...threadItemShape
}

export { threadItemShape }

export default ThreadItem
