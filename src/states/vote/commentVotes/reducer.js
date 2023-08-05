import { ActionType } from '../action'

function commentVotesReducer (state = {}, action = {}) {
  switch (action.type) {
    case ActionType.UPVOTE_COMMENT:
      return {
        ...state,
        [action.payload.threadId]: {
          ...(state[action.payload.threadId] || {}),
          [action.payload.commentId]: 1
        }
      }

    case ActionType.DOWNVOTE_COMMENT:
      return {
        ...state,
        [action.payload.threadId]: {
          ...(state[action.payload.threadId] || {}),
          [action.payload.commentId]: -1
        }
      }

    default:
      return state
  }
}

export default commentVotesReducer
