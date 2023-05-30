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


function BackendCourseList() {

    const [model, setModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState('');

    const navigate = useNavigate()


    const handleSearchQueryChange = (event) => {
        setSearchQuery(event.target.value);
        filteredCourses(event.target.value);
    };

    const filterList = (query) => {
        const filteredCourses = model.filter((course) => {
            course.firstName.toLowerCase().includes(query.toLowerCase())
        })

        setFilteredCourses(filteredCourses)
    }

    let getdata = () => {
        Get('/Courses').then((res) => {
            console.log(res.data.data);
            setModel([...res.data.data]);
        })
            .catch((err) => {
                console.log(err);
            });
    };

    let view = (id) => {
        console.log(id)
        navigate(`/singlecourse/${id}`)
    }


    let delData = (id) => {
        console.log(id)
        Delete('/Courses', id).then((res) => {
            console.log(res.data);
            console.log('course Deleted');
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
            displayName: "Short Name",
            key: "shortName",
        },
        {
            displayName: "Duration",
            key: "duration",
        },
        {
            displayName: "Fee",
            key: "fee",
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
                        label="Search for course"
                        className='p-2 m-4'
                        onChange={handleSearchQueryChange}
                    />
                </div>
            </Box>
            <Box>

                <SMGrid title="Courses List" datasource={model} columns={cols} />
            </Box>
        </>
    )
}

export default BackendCourseList
