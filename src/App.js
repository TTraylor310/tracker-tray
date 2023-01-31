import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import Header from './components/Header'

function App() {

  const notify = () => toast('Wow, so Easy!!!')

  return (
    <>
      <Router>
        <div className="container">
          <Header />
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
