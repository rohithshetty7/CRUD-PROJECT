
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TableShow from './components/TableShow';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee'
import Login from './components/Login';
import Registration from './components/Registration';
import { Container, Nav, Navbar, Table } from 'react-bootstrap';
import { useState } from 'react';
import { ContextProvider } from './context/context';
import EditEmployee from './components/EditEmployee';


function App() {
  const [storeData, setStoreData] = useState([])
  const [showEditModal, setEditModal] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [selectedEmployee, setSelectedEmployee] = useState({
    fullName: '',
    designation: '',
    salary: '',
    age: ''
  })
  const [index, setIndex] = useState(0)
  const changeLogin = () => {
    setShowLogin(true)
  }
  return (
    <Router>
      <div className='App'>

        <Navbar className='navbar navbar-expand-lg navbar-primary bg-primary'>
          <Container>
            <Navbar.Brand style={{ color: 'white' }}>Employee Details</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto mr-2">
                <div >
                  {showLogin ? <div id='nav' ><Link to="/login" id='nav1'>Login</Link ><Link id='nav1' to='/registration'>Register</Link></div> : <div style={{ display: 'flex' }}><div><Link id='nav1' to="/tableshow">Employees</Link>
                    <Link id='nav1' to="/add-employee" style={{ marginLeft: '15px' }}>Add Employee</Link></div><div><Link id='nav1' to='/login' onClick={() => { changeLogin() }}>LogOut</Link></div></div>}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <ContextProvider value={{ storeData, setStoreData, showEditModal, setEditModal, setShowLogin, selectedEmployee, setSelectedEmployee, setIndex, index }}>
            <Route exact={true} path="/" component={Home} />
            <Route path="/tableshow" component={TableShow} />
            <Route path="/add-employee" component={AddEmployee} />
            <Route path='/login' component={Login} />
            <Route path='/registration' component={Registration} />
            <Route path='/editEmployee' component={EditEmployee} />
          </ContextProvider>
        </div>
      </div>
    </Router>

  );
}

export default App;