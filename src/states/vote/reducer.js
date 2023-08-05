import { ActionType } from './action'

function voteReducer (state = { threadVotes: {}, commentVotes: {} }, action = {}) {
  switch (action.type) {
    case ActionType.UPVOTE_THREAD:
      return {
        ...state,
        threadVotes: { ...state.threadVotes, [action.payload.threadId]: 1 }
      }

    case ActionType.DOWNVOTE_THREAD:
      return {
        ...state,
        threadVotes: { ...state.threadVotes, [action.payload.threadId]: -1 }
      }

    case ActionType.UPVOTE_COMMENT:
      return {
        ...state,
        commentVotes: {
          ...state.commentVotes,
          [action.payload.threadId]: {
            ...(state.commentVotes[action.payload.threadId] || {}),
            [action.payload.commentId]: 1
          }
        }
      }

    case ActionType.DOWNVOTE_COMMENT:
      return {
        ...state,
        commentVotes: {
          ...state.commentVotes,
          [action.payload.threadId]: {
            ...(state.commentVotes[action.payload.threadId] || {}),
            [action.payload.commentId]: -1
          }
        }
      }

    default:
      return state
  }
}

export default voteReducer
