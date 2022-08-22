import reactLogo from './assets/react.svg';
import bdevelopmentLogo from './assets/Media/imgs/logoWhite.png';
import bootstrapLogo from './assets/bootstrap-logo-shadow.png';
import './App.css';
import BannerUsers from './components/BannerUsers';
import CardUser from './components/CardUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ModalEdit from './components/ModalEdit';


function App() {
  const url = 'https://users-crud1.herokuapp.com/users/';

  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});
  const [delUser, setDelUser] = useState();
  const [editUser, setEditUser] = useState({});
  const [viewUser, setViewUser] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);


  const submitNewUser = (data) => {
    axios.post(url, data)
      .then(_ => setNewUser(data))
      .catch(msj => console.log(msj))
  }
  const submitEdituser = (data) => {

    console.log(data);
    setShowModalEdit(false);
  }

  const delUserHandler = (e) => {
    const id = e.target.parentElement.getAttribute('data-id');
    const delUrl = `${url}${id}/`;
    axios.delete(delUrl)
      .then(_ => setDelUser(id))
      .catch(msj => console.log(msj))
  }
  const editUserhandler = (e) => {
    const id = e.target.parentElement.getAttribute('data-id');
    const getUrl = `${url}${id}/`;
    axios.get(getUrl)
      .then(res => {
        setViewUser(res.data);
        setShowModalEdit(true);

      })
      .catch(msj => console.log(msj))
  }
  const handleHidde = () => setShowModalEdit(false);

  useEffect(() => {
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(msj => console.log(msj))
  }, [newUser, delUser])



  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={reactLogo} alt="" className="d-inline-block align-text-top react-logo" />
            <img src={bootstrapLogo} alt="" className="d-inline-block align-text-top bootstrap-logo" />
            <h3><strong>Enregrable 4</strong> - Berselis J. Mendoza M.</h3>
          </a>
          <img src={bdevelopmentLogo} alt="BJMM" className='bdevelopment-logo' />
        </div>
      </nav>
      <div className='container grand'>
        <div className='row layout-center'>

          <ModalEdit user={viewUser} show={showModalEdit} handleHidde={handleHidde} submitEdituser={submitEdituser} />


          <BannerUsers cantUser={users.length} submitNewUser={submitNewUser} />


          <div className='col-md-12 col-sm-12 col-xs-12'>
            <div className='container'>
              <div className='row content-card-user'>
                {
                  users?.map(user => {
                    return <CardUser key={user.id} user={user} delUserHandler={delUserHandler} editUserHandler={editUserhandler} />
                  })
                }
              </div>
            </div>
          </div>


        </div>
      </div>
      <footer className='footer navbar-dark bg-dark'> </footer>
    </>
  )
}

export default App
