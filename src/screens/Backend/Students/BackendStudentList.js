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


function BackendStudentList() {

    const [model, setModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStudents, setFilteredStudents] = useState('');

    const navigate = useNavigate()


    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
        filteredStudents(event.target.value);
    };

    const filterList = (query) => {
        const filteredStudents = model.filter((student) => {
            student.firstName.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredStudents(filteredStudents)
    }

    let getdata = () => {
        Get('/students').then((res) => {
            console.log(res.data.data);
            setModel([...res.data.data]);
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let view = (id) => {
        console.log(id)
        navigate(`/singlestudent/${id}`)
    }
    let editData = (id) => {
        console.log(id)
        navigate(`/studentform/${id}`)
    }


    let delData = (id) => {
        console.log(id)
        Delete('/students', id).then((res) => {
            console.log(res.data);
            console.log('Student Deleted');
            getdata()
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let btnList = [
        {
            label: "Add",
            onClick: () => {
                navigate('/studentform')
            }
        },
    ]

    useEffect(() => {
        getdata();
    }, []);


    let cols = [
        {
            displayName: "First Name",
            key: "firstName",
        },
        {
            displayName: "Last Name",
            key: "lastName",
        },
        {
            displayName: "Email",
            key: "email",
        },
        {
            displayName: "Password",
            key: "password",
        },
        {
            displayName: "Contact",
            key: "contact",
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


    return (
        <>
            <Box>
                <ScreenHeader
                    title="Students List"
                    buttonsList={btnList}
                />
                {/* <div className="p-2 m-4">

                    <SMInput
                        type="text"
                        placeholder="Search for a car"
                        value={searchQuery}
                        label="Search for Student"
                        className='p-2 m-4'
                        onChange={handleSearchQueryChange}
                    />
                </div> */}
            </Box>
            <Box>

                <SMGrid datasource={model} columns={cols} />
            </Box>
        </>
    )
}

export default BackendStudentList
