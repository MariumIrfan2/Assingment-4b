import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgSrc} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    {/* <Button onClick={props.btnOnclick} variant="primary">Add To Cart</Button> */}
                {/* <button onClick={props.btnOnClick}>Buy</button> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCard;











// function Card(props){
//     return(
//         <>
//     <img width='10%' src={props.imgSrc} />
//     <h1>{props.title}</h1>
//     <h1>{props.price}</h1>
//     <button onClick={props.btnOnClick}>Buy</button>
//         </>
//     )
// }

// export default Card;