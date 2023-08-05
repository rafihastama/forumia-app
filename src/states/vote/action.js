const ActionType = {
  UPVOTE_THREAD: 'UPVOTE_THREAD',
  DOWNVOTE_THREAD: 'DOWNVOTE_THREAD',
  UPVOTE_COMMENT: 'UPVOTE_COMMENT',
  DOWNVOTE_COMMENT: 'DOWNVOTE_COMMENT'
}

function upvoteThreadActionCreator (threadId, vote) {
  return {
    type: ActionType.UPVOTE_THREAD,
    payload: {
      threadId,
      vote
    }
  }
}

function downvoteThreadActionCreator (threadId, vote) {
  return {
    type: ActionType.DOWNVOTE_THREAD,
    payload: {
      threadId,
      vote
    }
  }
}

function upvoteCommentActionCreator (threadId, commentId, vote) {
  return {
    type: ActionType.UPVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      vote
    }
  }
}

function downvoteCommentActionCreator (threadId, commentId, vote) {
  return {
    type: ActionType.DOWNVOTE_COMMENT,
    payload: {
      threadId,
      commentId,
      vote
    }
  }
}

export {
  ActionType,
  upvoteThreadActionCreator,
  downvoteThreadActionCreator,
  upvoteCommentActionCreator,
  downvoteCommentActionCreator
}
