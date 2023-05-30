import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from '../../../config/Axios/apibasemethods';

function SingleTeacher() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let get = () => {
        Get("/teachers", id).then((res) => {
            console.log(res.data.data)
            setModel(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {
        get()
    }, [])

    return (
        <div className='text-center fs-3 m-auto'>
            <div>Name:{model.name}</div>
            <div>Last Name:{model.course}</div>
            <div>Contact: {model.contact}</div>
        </div>
    )
}

export default SingleTeacher
