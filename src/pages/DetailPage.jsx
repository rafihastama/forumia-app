import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ThreadDetail from '../components/ThreadDetail'
import ThreadItem from '../components/ThreadItem'
import ThreadComment from '../components/ThreadComment'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAddComment, asyncReceiveThreadDetail } from '../states/threadDetail/action'

function DetailPage () {
  const { id } = useParams()
  const {
    threadDetail = null,
    authUser
  } = useSelector((states) => states)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id))
  }, [id, dispatch])

  const onAddComment = (threadId, content) => {
    dispatch(asyncAddComment(threadId, content))
  }

  if (!threadDetail) {
    return <div>Loading...</div>
  }

  return (
    <section className="detail-page">
      {
        threadDetail.parent && (
          <div className="detail-page__parent">
            <h3>Replying To</h3>
            <ThreadItem {...threadDetail.parent} authUser={authUser.id} />
          </div>
        )
      }
      <ThreadDetail {...threadDetail} authUser={authUser.id} />
      <ThreadComment threadId={threadDetail.id} addComment={onAddComment}/>
    </section>
  )
}

export default DetailPage
