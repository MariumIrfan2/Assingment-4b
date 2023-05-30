import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from '../../../config/Axios/apibasemethods';

export default function SingleStudent() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let getByID = () => {
        Get("/students", id).then((res) => {
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
        <div className='text-center fs-3 m-auto'>
            <div>{model.firstName}</div>
            <div>{model.lastName}</div>
            <div> {model.email}</div>
            <div> {model.password}</div>
            <div> {model.contact}</div>
        </div>
    )
}


