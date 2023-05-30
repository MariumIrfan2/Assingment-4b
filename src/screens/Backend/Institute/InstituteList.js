import React, { useEffect, useState } from 'react'
import { Delete, Get } from '../../../config/Axios/apibasemethods';
import SMGrid from '../../../Components/SMGrid';
import SMInput from '../../../Components/SMInput';
import SMIconButton from "../../../Components/SMIconButton.js";
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScreenHeader from "../../../Components/ScreenHeader.js";
import { useNavigate } from 'react-router-dom';


function BackendInstituteList() {

    const [model, setModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredInstitute, setFilteredInstitute] = useState('');

    const navigate = useNavigate()


    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
        filteredInstitute(event.target.value);
    };

    const filterList = (query) => {
        const filteredInstitute = model.filter((institute) => {
            institute.firstName.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredInstitute(filteredInstitute)
    }

    let getdata = () => {
        Get('/institutes').then((res) => {
            console.log(res.data.data);
            setModel([...res.data.data]);
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let view = (id) => {
        console.log(id)
        navigate(`/singleinstitute/${id}`)
    }


    let delData = (id) => {
        console.log(id)
        Delete('/Institute', id).then((res) => {
            console.log(res.data);
            console.log('institute Deleted');
            getdata()
        })
            .catch((err) => {
                console.log(err);
            });
    };
    let editData = (id) => {
        console.log(id)
        navigate(`/instituteform/${id}`)
    }


    useEffect(() => {
        getdata();
    }, []);

    let cols = [
        {
            displayName: "Name",
            key: "name",
        },
        {
            displayName: "Short Name",
            key: "shortName",
        },
        {
            displayName: "Address",
            key: "address",
        },
        {
            displayName: "Tel",
            key: "tel",
        },
        {
            displayName: "Action",
            key: "",
            displayField: (e) => (
                <>
                    <SMIconButton
                        color="primary"
                        iconComponent={<VisibilityIcon />}
                        onClick={() => view(e._id)}
                    />
                    <SMIconButton
                        color="primary"
                        iconComponent={<EditIcon />}
                        onClick={() => editData(e._id)}
                    />

                    <SMIconButton
                        color="error"
                        iconComponent={<DeleteIcon />}
                        onClick={() => delData(e._id)}
                    />
                </>
            ),
        },
    ]
    let btnList = [
        {
            label: "Add",
            onClick: () => {
                navigate('/instituteform')
            }
        },
    ]

    return (
        <>
            <Box>
                <ScreenHeader
                    title="Institute List"
                    buttonsList={btnList}
                />
                <div className="p-2 m-4">

                    <SMInput
                        type="text"
                        placeholder="Search for a car"
                        value={searchQuery}
                        label="Search for institute"
                        className='p-2 m-4'
                        onChange={handleSearchQueryChange}
                    />
                </div>
            </Box>
            <Box>

                <SMGrid title="Institute List" datasource={model} columns={cols} />
            </Box>
        </>
    )
}

export default BackendInstituteList
