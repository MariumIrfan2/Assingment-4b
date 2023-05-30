import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetById } from '../../../config/Axios/apibasemethods';

export default function SingleCourse() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let getByID = () => {
        GetById("/courses", id).then((res) => {
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
            <div>{model.name}</div>
            <div>{model.name}</div>
            <div>{model.duration}</div>
            <div>{model.fee}</div>

        </div>
    )
}

