import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card className='card' reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button className='edit'>
        <FaEdit color='purple' onClick={() => editFeedback(item)} />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object,
}
export default FeedbackItem
