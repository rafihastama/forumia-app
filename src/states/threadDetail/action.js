import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import { upvoteThreadActionCreator, downvoteThreadActionCreator, upvoteCommentActionCreator, downvoteCommentActionCreator } from '../vote/action'

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT'
}

function receiveThreadDetailActionCreator (threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail
    }
  }
}

function clearThreadDetailActionCreator () {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL
  }
}

function addCommentActionCreator (comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment
    }
  }
}

function asyncReceiveThreadDetail (threadId) {
  return async (dispatch) => {
    dispatch(showLoading())

    dispatch(clearThreadDetailActionCreator())

    try {
      const threadDetail = await api.getThreadDetail(threadId)
      dispatch(receiveThreadDetailActionCreator(threadDetail))
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

function asyncAddComment (threadId, content) {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      const comment = await api.createComment(threadId, content)
      dispatch(addCommentActionCreator(comment))
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

function asyncUpvoteThread (threadId) {
  return async (dispatch) => {
    try {
      const vote = await api.upvoteThread(threadId)
      dispatch(upvoteThreadActionCreator(threadId, vote))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncDownvoteThread (threadId) {
  return async (dispatch) => {
    try {
      const vote = await api.downvoteThread(threadId)
      dispatch(downvoteThreadActionCreator(threadId, vote))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncUpvoteComment (threadId, commentId) {
  return async (dispatch) => {
    try {
      const vote = await api.upvoteComment(threadId, commentId)
      dispatch(upvoteCommentActionCreator(threadId, commentId, vote))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncDownvoteComment (threadId, commentId) {
  return async (dispatch) => {
    try {
      const vote = await api.downvoteComment(threadId, commentId)
      dispatch(downvoteCommentActionCreator(threadId, commentId, vote))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  addCommentActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
  asyncUpvoteThread,
  asyncDownvoteThread,
  asyncUpvoteComment,
  asyncDownvoteComment
}
