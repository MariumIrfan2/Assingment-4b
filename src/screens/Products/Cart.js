import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../config/Redux/Reducer/CartSlice";


export default function Cart() {
  const cartData = useSelector((a) => a.Cart);
  const dispatch = useDispatch()

  let removeProduct = (id) => {
    dispatch(remove(id));
  };

  return (
    <>
      <h1>Cart</h1>
      <div className="row">
        {cartData.map((x, i) => (
          <div className="col-md-3" key={i}>
            <img src={x.image} width="100px" />
            <h2>{x.title}</h2>
            <h2>{x.price}</h2>
            <button className="btn btn-info" onClick={() => removeProduct(x.id)}>Remove From Cart</button>
          </div>
        ))}
      </div>

    </>
  );
}