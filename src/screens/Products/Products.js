import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../config/Redux/Reducer/CartSlice";
import { Link } from "react-router-dom";

export default function Products() {
    const [listData, setListData] = useState([]);
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();

    const loginfromredux = useSelector((a) => (a.Login))
    console.log(loginfromredux)
    const signupfromredux = useSelector((a) => (a.SignUp))
    console.log(signupfromredux)

    let getData = () => {
        setLoader(true);
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => {
                setLoader(false);
                setListData([...json]);
            })
            .catch((er) => {
                setLoader(false);
                console.log(er);
            });
    };
    let addToCart = (e) => {
        dispatch(add(e));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h1>Welcome {signupfromredux.name}</h1>
            <h1>Products</h1>
            <Link className="fs-2 text-success p-2 m-24" to="/cart">GoToCart</Link>
            <div className="row">
                {loader ? (
                    <h2>Loading</h2>
                ) : listData && listData.length > 0 ? (
                    listData.map((x, i) => (
                        <div className="shadow bg-light col-md-3" key={i}>
                            <img src={x.image} width="300px" />
                            <div>
                                <h3>{x.title}</h3>
                                <h3>${x.price}</h3>

                                <button className="btn btn-info" onClick={() => addToCart(x)}>Add To Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No Data Found</h2>
                )}
            </div>

        </>
    );
}