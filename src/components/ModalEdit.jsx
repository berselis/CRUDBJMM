import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ModalEdit = ({ user, show, handleHidde, submitEdituser }) => {
    const { id, first_name, last_name, email, password, birthday } = user;

    const onSubmit = (data) => {
        submitEdituser(data)
        reset();
        
    }
    const { register, handleSubmit, reset } = useForm();

    const handleShowIcon = (e) => {
        e.target.value != '' ? e.target.parentElement.classList.add('inside-value')
            : e.target.parentElement.classList.remove('inside-value');
    }

    useEffect(() => {
        reset({
            'id': id,
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password,
            'birthday': birthday
        })



    }, [user])

    return (
        <Modal show={show} onHide={handleHidde} backdrop="static" keyboard={false}>
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleShowIcon} >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3><strong>Edit User</strong></h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className="col-md-6 col-sm-6 col-xs-12 group-icon-show inside-value">
                            <input hidden {...register('id')} />
                            <input {...register('first_name')} className="form-control" type="text" placeholder='Name' required minLength={1} maxLength={25} />
                            <i className="bi bi-person-fill"></i>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12 group-icon-show inside-value">
                            <input {...register('last_name')} className="form-control" type="text" placeholder='Last name' required minLength={1} maxLength={25} />
                            <i className="bi bi-person-fill"></i>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12 group-icon-show inside-value">
                            <input {...register('email')} className="form-control" type="email" placeholder='Email' required minLength={1} maxLength={150} />
                            <i className="bi bi-envelope-fill"></i>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12 group-icon-show inside-value">
                            <input {...register('password')} className="form-control" type="password" placeholder='password' required minLength={1} maxLength={128} />
                            <i className="bi bi-lock-fill"></i>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12 group-icon-show inside-value">
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
    )
}
export default ModalEdit