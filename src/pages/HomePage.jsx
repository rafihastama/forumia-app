import React, { useEffect } from 'react'
import ThreadInput from '../components/ThreadInput'
import ThreadsList from '../components/ThreadsList'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThreads } from '../states/shared/action'
import { asyncAddThread } from '../states/threads/action'

function HomePage () {
  const {
    threads = [],
    users = []
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const onAddThread = (thread) => {
    dispatch(asyncAddThread(thread))
  }

  const threadsList = threads.map((thread) => {
    const owner = users.find((user) => user.id === thread.ownerId)
    return {
      ...thread,
      owner,
      user: owner
    }
  })

  return (
    <section className="home-page">
      <ThreadInput addThread={onAddThread} />
      <ThreadsList threads={threadsList} />
    </section>
  )
}

export default HomePage
