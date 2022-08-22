import React from 'react'

const CardUser = ({ user, delUserHandler, editUserHandler }) => {
    const { id, first_name, last_name, email, birthday } = user;

    return (
        <div className='col-body-card'>
            <div className='body-card'>
                <div className='content-card'>
                    <div className='title'>
                        <h5><strong>{`${first_name} ${last_name}`}</strong></h5>
                        <hr />
                        <strong>Email</strong>
                        <h5>{email}</h5>
                        <strong>birthday</strong>
                        <p>{birthday}</p>
                    </div>
                </div>
                <div className='icons-card'>
                    <div className='icon'>
                        <a onClick={editUserHandler} data-id={id} className='edit'>
                            <i className="bi bi-pencil-square"></i>
                            <label>Edit</label>
                        </a>
                    </div>

                    <div className='icon'>
                        <a onClick={delUserHandler} data-id={id} className='delete'>
                            <i className="bi bi-trash-fill"></i>
                            <label>Delete</label>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardUser