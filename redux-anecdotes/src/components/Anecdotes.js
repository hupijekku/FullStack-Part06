import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const id = useSelector(state => state.notification.timerID)
  anecdotes.sort((a,b) => (a.votes < b.votes) ? 1 : -1)
  return (
    <ul>
      {anecdotes
      .filter(anec => anec.content.toLowerCase().includes(filter.toLowerCase()))
      .map(anec =>
        <Anecdote
          key={anec.id}
          anecdote={anec}
          handleClick={() => {
              dispatch(addVote(anec))
              dispatch(notificationChange(`you voted "${anec.content}"`, 5, id))
            }
          }
        />
      )}
    </ul>
  )
}

export default Anecdotes