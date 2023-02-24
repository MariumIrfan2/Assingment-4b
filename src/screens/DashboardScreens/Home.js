import { useLocation } from "react-router-dom";

function Home() {
    const location = useLocation();
    const { title, image, description, price } = location.state
    console.log(location.state)
    return (
        <>
            <div className="text-center">
                <div>
                    <img width='20%' src={image} />
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
                <h4>${price}</h4>

            </div>
        </>
    )
}

export default Home;