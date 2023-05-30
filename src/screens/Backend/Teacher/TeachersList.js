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


function BackendTeachersList() {

    const [model, setModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredTeachers, setFilteredTeachers] = useState('');

    const navigate = useNavigate()


    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
        filteredTeachers(event.target.value);
    };

    const filterList = (query) => {
        const filteredTeachers = model.filter((teacher) => {
            teacher.firstName.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredTeachers(filteredTeachers)
    }

    let getdata = () => {
        Get('/Teachers').then((res) => {
            console.log(res.data.data);
            setModel([...res.data.data]);
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let view = (id) => {
        console.log(id)
        navigate(`/singleteacher/${id}`)
    }


    let delData = (id) => {
        console.log(id)
        Delete('/Teachers', id).then((res) => {
            console.log(res.data);
            console.log('teacher Deleted');
            getdata()
        })
            .catch((err) => {
                console.log(err);
            });
    };


    useEffect(() => {
        getdata();
    }, []);

    let cols = [
        {
            displayName: "Name",
            key: "name",
        },
        {
            displayName: "Course",
            key: "course",
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
                    // onClick={() => view(e._id)}
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
                {/* <ScreenHeader
                    title="Cars List"
                    buttonsList={btnList}
                /> */}
                <div className="p-2 m-4">

                    <SMInput
                        type="text"
                        placeholder="Search for a car"
                        value={searchQuery}
                        label="Search for teacher"
                        className='p-2 m-4'
                        onChange={handleSearchQueryChange}
                    />
                </div>
            </Box>
            <Box>

                <SMGrid title="Teachers List" datasource={model} columns={cols} />
            </Box>
        </>
    )
}

export default BackendTeachersList
