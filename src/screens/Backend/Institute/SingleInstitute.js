import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetById } from '../../../config/Axios/apibasemethods';

export default function SingleInstitute() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let getByID = () => {
        GetById("/institutes", id).then((res) => {
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
            <div>{model.shortName}</div>
            <div>{model.address}</div>
            <div>{model.tel}</div>

        </div>
    )
}


