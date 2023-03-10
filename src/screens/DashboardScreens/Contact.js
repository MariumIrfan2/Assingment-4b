import { useEffect, useState } from "react";
import { Get } from "../../config/apiBaseMethods";


function Contact() {

    const [listData, setListData] = useState([]);
    const [loader, setLoader] = useState(false);

    let getdata = () => {
        setLoader(true)
        Get('posts')
            .then((res) => {
                console.log(res)
                setListData([...res.data])
                setLoader(false)
            })
            .catch((err) => {
                console.log(err)
                setLoader(false)
            })
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <>
            <h1>Posts</h1>
            {loader ?
                (<div><img alt='loading'
                    src='https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952k3losl32tu5mh0m4pnkjviko6bdc9pjetrvgacpw&rid=200w.gif&ct=g' />
                </div>)
                : listData && listData.length < 1 ?
                    (<h1>No Data Found</h1>)
                    : listData && listData.length > 0 ?
                        (listData.map((x, i) => {
                            return (<div className="mb-2 p-2 shadow" key={i}>
                                <h1>{x.title}</h1>
                                <p>{x.body}</p>
                            </div>)
                        })
                        )
                        : null}


        </>
    )
}

export default Contact;