import { ActionType } from '../action'

function threadVotesReducer (state = {}, action = {}) {
  switch (action.type) {
    case ActionType.UPVOTE_THREAD:
      return { ...state, [action.payload.threadId]: 1 }

    case ActionType.DOWNVOTE_THREAD:
      return { ...state, [action.payload.threadId]: -1 }

    default:
      return state
  }
}

export default threadVotesReducer
