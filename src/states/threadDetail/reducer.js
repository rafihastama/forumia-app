/* eslint-disable no-case-declarations */
import { ActionType } from './action'

function threadDetailReducer (threadDetail = null, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.threadDetail

    case ActionType.ADD_COMMENT:
      const comments = threadDetail?.comments || []
      return {
        ...threadDetail,
        comments: [...comments, action.payload.comment]
      }

    case ActionType.UPVOTE_THREAD:
      return {
        ...threadDetail,
        [action.payload.threadId]: 1
      }

    case ActionType.DOWNVOTE_THREAD:
      return {
        ...threadDetail,
        [action.payload.threadId]: -1
      }

    case ActionType.UPVOTE_COMMENT:
      return {
        ...threadDetail,
        [action.payload.threadId]: {
          ...(threadDetail[action.payload.threadId] || {}),
          [action.payload.commentId]: 1
        }
      }

    case ActionType.DOWNVOTE_COMMENT:
      return {
        ...threadDetail,
        [action.payload.threadId]: {
          ...(threadDetail[action.payload.threadId] || {}),
          [action.payload.commentId]: -1
        }
      }

    default:
      return threadDetail
  }
}

export default threadDetailReducer
