import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

import { GlobalContext } from '../../contexts/GlobalContext'

function LoggedInNav() {
  const { setLoggedIn } = useContext(GlobalContext)
  const handleLogOut = () => {
    localStorage.removeItem('token');
    setLoggedIn?.(false)
  }
  return (
    <>
      <Nav.Link as={ Link } to='/' className='d-flex align-items-center'>Dashboard</Nav.Link>
      <Nav.Link as={ Link } to='/appointments' className='d-flex align-items-center'>Appointments</Nav.Link>
      <Nav.Link as={ Link } to='/profile' className='d-flex align-items-center'>Profile</Nav.Link>
      <Nav.Link as={ Link } to='/'>
        <Button variant="danger" onClick={handleLogOut}>LogOut</Button>
      </Nav.Link>
    </>
  )
}

export default LoggedInNav