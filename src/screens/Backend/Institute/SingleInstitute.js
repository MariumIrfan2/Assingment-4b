import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from '../../../config/Axios/apibasemethods';

export default function SingleInstitute() {

    const [model, setModel] = useState({})

    let { id } = useParams();
    console.log(id)

    let get = () => {
        Get("/institutes", id).then((res) => {
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
            <div>{model.shortName}</div>
            <div>{model.address}</div>
            <div>{model.tel}</div>

        </div>
    )
}


