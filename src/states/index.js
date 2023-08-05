import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'
import authUserReducer from './authUser/reducer'
import isPreloadReducer from './isPreload/reducer'
import threadDetailReducer from './threadDetail/reducer'
import threadsReducer from './threads/reducer'
import usersReducer from './users/reducer'
import threadVotesReducer from './vote/threadVotes/reducer'
import commentVotesReducer from './vote/commentVotes/reducer'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    threadVotes: threadVotesReducer,
    commentVotes: commentVotesReducer,
    loadingBar: loadingBarReducer
  }
})

export default store
