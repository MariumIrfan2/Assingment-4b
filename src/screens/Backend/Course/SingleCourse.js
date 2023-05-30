import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from '../../../config/Axios/apibasemethods';

export default function SingleCourse() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let get = () => {
        Get("/courses", id).then((res) => {
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
            <div>{model.name}</div>
            <div>{model.name}</div>
            <div>{model.duration}</div>
            <div>{model.fee}</div>

        </div>
    )
}

