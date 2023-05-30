import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetById } from '../../../config/Axios/apibasemethods';

function SingleStudent() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let getByID = () => {
        GetById("/students", id).then((res) => {
            console.log(res.data.data)
            setModel(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
        getByID()
    }, [])

    return (
        <div>
            <div>First Name:{model.firstName}</div>
            <div>Last Name:{model.lastName}</div>
            <div>Email: {model.email}</div>
            <div>Password: {model.password}</div>
            <div>Contact: {model.contact}</div>
        </div>
    )
}

export default SingleStudent
