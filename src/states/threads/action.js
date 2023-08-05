import api from '../../utils/api'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD'
}

function receiveThreadsActionCreator (threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads
    }
  }
}

function addThreadActionCreator (thread) {
  return {
    type: ActionType.ADD_THREAD,
    payload: {
      thread
    }
  }
}

function asyncAddThread (thread) {
  return async (dispatch) => {
    dispatch(showLoading())

    try {
      const newThread = await api.createThread(thread)
      dispatch(addThreadActionCreator(newThread))
    } catch (error) {
      alert(error.message)
    }

    dispatch(hideLoading())
  }
}

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread
}
