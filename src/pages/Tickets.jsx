
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const Tickets = () => {



  if(!tickets) {
    return <Spinner />
  }

  return (
    <>
      <BackButton />
      <h1>Tickets</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Date</div>
          <div>Products</div>
          <div>Status</div>
          <div></div>
        </div>

      </div>
    </>
  )
}

export default Tickets
