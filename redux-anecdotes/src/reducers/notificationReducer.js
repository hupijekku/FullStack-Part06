const initialState = {
  notification: '',
  timerID: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    default:
      return state
  }
}

export const notificationChange = (notification, time, id) => {
  const delay = time * 1000
  clearTimeout(id)
  return async dispatch => {
    const timeout = setTimeout(() => dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        notification: '',
        timerID: 0
      }
    }), delay)

    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        notification: notification,
        timerID: timeout
      }
    })
    
  }
}
export default reducer