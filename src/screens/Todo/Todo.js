import React, { useEffect, useState } from 'react'
import { Delete, Get } from '../../config/Axios/apibasemethods';
import SMGrid from '../../Components/SMGrid';
import SMInput from '../../Components/SMInput';
import SMIconButton from "../../Components/SMIconButton.js";
import { Box, Button, Pagination } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ScreenHeader from "../../Components/ScreenHeader.js";
import { useNavigate } from 'react-router-dom';



function Todo() {

    const [model, setModel] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStudents, setFilteredStudents] = useState('');
    const [currentPage, setCurrentPage] = useState(3)
    const [totalPages, setTotalPages] = useState(6)


    const navigate = useNavigate()


    // const handleSearchQueryChange = (event) => {
    //     setSearchQuery(event.target.value);
    //     filteredStudents(event.target.value);
    // };

    // const filterList = (query) => {
    //     const filteredStudents = model.filter((student) => {
    //         student.firstName.toLowerCase().includes(query.toLowerCase())
    //     })

    //     setFilteredStudents(filteredStudents)
    // }

    let getdata = () => {
        Get(`/todos?p=${currentPage}`).then((res) => {
            console.log(res.data.data);
            setModel([...res.data.data]);

            // const { totalPages } = res.data.data.totalPages;


            // setTotalPages(totalPages);
        })
            .catch((err) => {
                console.log(err);
            });
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            getdata()
        }

    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            getdata()
        }
    };

    // let view = (id) => {
    //     console.log(id)
    //     navigate(`/singlestudent/${id}`)
    // }
    // let editData = (id) => {
    //     console.log(id)
    //     navigate(`/studentform/${id}`)
    // }


    // let delData = (id) => {
    //     console.log(id)
    //     Delete('/students', id).then((res) => {
    //         console.log(res.data);
    //         console.log('Student Deleted');
    //         getdata()
    //     })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    let btnList = [
        {
            label: "Prev",
            onClick: () => {
                prevPage()
            }
        },
        {
            label: "Next",
            onClick: () => {
                nextPage()
            }
        },
    ]

    useEffect(() => {
        getdata();
    }, []);


    let cols = [
        {
            displayName: "Todo",
            key: "text",
        },
        {
            displayName: "Action",
            key: "",
            displayField: (e) => (
                <>
                    <SMIconButton
                        color="primary"
                        iconComponent={<VisibilityIcon />}
                    // onClick={() => view(e._id)}
                    />
                    <SMIconButton
                        color="primary"
                        iconComponent={<EditIcon />}
                    // onClick={() => editData(e._id)}
                    />

                    <SMIconButton
                        color="error"
                        iconComponent={<DeleteIcon />}
                    // onClick={() => delData(e._id)}
                    />
                </>
            ),
        },
    ]


    return (
        <>
            <Box>
                <ScreenHeader
                    title="Todo List"
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
            <Box>

                <Pagination count={totalPages} page={currentPage} />
            </Box>


        </>
    )
}

export default Todo;

