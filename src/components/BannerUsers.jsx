import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const BannerUsers = ({cantUser, submitNewUser}) => {

    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true)
    const handleHidde = () => setShowModal(false);

    const onSubmit = (data) =>{
        submitNewUser(data);
        reset();
        setShowModal(false);
    }
    const {register, handleSubmit, reset} = useForm();

    const handleShowIcon = (e) => {
        e.target.value != '' ? e.target.parentElement.classList.add('inside-value')
        : e.target.parentElement.classList.remove('inside-value');
    }


    return (
        <div className='col-md-12 col-sm-12 col-xs-12'>

            <Modal show={showModal} onHide={handleHidde} backdrop="static" keyboard={false}>
                <form onSubmit={handleSubmit(onSubmit)} onChange={handleShowIcon} >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h3><strong>New User</strong></h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            <div className="col-md-6 col-sm-6 col-xs-12 group-icon-show">
                                <input {...register('first_name')} className="form-control" type="text" placeholder='Name' required minLength={1} maxLength={25} />
                                <i className="bi bi-person-fill"></i>
                            </div>

                            <div className="col-md-6 col-sm-6 col-xs-12 group-icon-show">
                                <input {...register('last_name')} className="form-control" type="text" placeholder='Last name' required minLength={1} maxLength={25} />
                                <i className="bi bi-person-fill"></i>
                            </div>

                            <div className="col-md-12 col-sm-12 col-xs-12 group-icon-show">
                                <input {...register('email')} className="form-control" type="email" placeholder='Email' required minLength={1} maxLength={150} />
                                <i className="bi bi-envelope-fill"></i>
                            </div>

                            <div className="col-md-12 col-sm-12 col-xs-12 group-icon-show">
                                <input {...register('password')} className="form-control" type="password" placeholder='password' required minLength={1} maxLength={128}/>
                                <i className="bi bi-lock-fill"></i>
                            </div>

                            <div className="col-md-12 col-sm-12 col-xs-12 group-icon-show">
                                <input {...register('birthday')} className="form-control" type="date" placeholder='birthday' required />
                                <i className="bi bi-calendar-check-fill"></i>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </Modal.Footer>
                </form>
            </Modal>

            <div className='banner-content'>
                <div className='banner-text'>
                    <h3><strong>List Users {cantUser}</strong></h3>
                </div>
                <div className='banner-botton'>
                    <div className='btn-group btn-group-lg'>
                        <button onClick={handleShow} type="button" className="btn btn-success">
                            <span>Add User</span>
                            <i className="bi bi-person-plus-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default BannerUsers