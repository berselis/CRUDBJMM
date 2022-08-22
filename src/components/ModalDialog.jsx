import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import axios from 'axios';

const ModalDialog = ({ dataUser, onConfirm }) => {

    const [showModal, setShowModal] = useState(false);
    const hiddedHandler = () => setShowModal(false);

    const deletedUser = () => {
        axios.delete(dataUser.url)
            .then(_ => {
                onConfirm(dataUser);
                hiddedHandler();
            })
            .catch(msj => console.log(msj))
    }




    useEffect(() => {
        if (dataUser) setShowModal(dataUser.show);
    }, [dataUser])

    return (
        <Modal show={showModal} backdrop="static" keyboard={false} centered={true} size="sm">
            <Modal.Header>
                <Modal.Title>
                    <h3><strong>Alert</strong> <i className="bi bi-shield-fill-exclamation"></i></h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <h5><strong>¿Delete user?</strong></h5>


            </Modal.Body>
            <Modal.Footer>
                <div className="btn-group">
                    <button onClick={hiddedHandler} type="buttom" className="btn btn-secondary">NO</button>
                    <button onClick={deletedUser} type="buttom" className="btn btn-danger">YES</button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDialog