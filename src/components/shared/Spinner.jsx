import spinner from '../../assets/spinner3.gif'

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  )
}

export default Spinner
