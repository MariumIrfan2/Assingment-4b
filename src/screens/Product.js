import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductCard from '../Components/Card';
import { CircularProgress } from '@mui/material';
import { TextField } from '@mui/material';

function Product() {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {

        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    const getHandler = () => {
        axios('https://fakestoreapi.com/products')
            .then((res) => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log('err')
                setIsLoading(false)
            })

    }


    const getProduct = (e) => {
        console.log(e)
        navigate('/home', {
            state: e
        })
    }


    useEffect(() => {
        getHandler()
    }, [])
    console.log(data)


    return (
        <>

            <div className='text-center p-3 m-2 shadow bg-secondary'>
                <TextField
                    className=' text-center bg-light'
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>

            {isLoading ? <CircularProgress /> :

                <div className='row'>
                    {data.map((x, i) => {
                        return <div className='col-md'>

                            <ProductCard title={x.title} imgSrc={x.image} />
                            <button onClick={() => getProduct(x)}>View Product</button>
                        </div>

                    })}
                </div>
            }

        </>


    )
}


export default Product;