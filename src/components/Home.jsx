import React, { useState, useEffect } from "react";
import ImageShow from "./ImageShow";
import http from "./HttpServices";
import ImagesData from "../Api.jsx";
import Loading from "../assets/loading.gif"
import "../index.css";
import "../loader.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";



const Home = () => {
    //all used useState hooks
    const [images, setImages] = useState()
    const [show, setShow] = useState()

    // function for handle show
    const handleClick = (e) => {
        setShow(e)
    }

    //useEffect function for Api consuming
    useEffect(() => {

        //async function for api call
        const getData = async () => {
            const Images = await http.get(ImagesData);
            setImages(Images.data)
        }
        getData()
    }, [])

    //returning dom elements
    return (
        <>
            {!images &&
             <img id="loader" src={Loading} alt="loader" />
            }
            <div id="gallery">
                {images &&
                    images.map((e) =>
                        <> 
                            <img key={e.id} onClick={() => handleClick(e.urls.raw)} data-toggle="modal" data-target="#exampleModalCenter" src={e.urls.raw} alt="images" />
                        </>
                    )
                }
            </div>
            <ImageShow Src={show} />
        </>
    );
}

export default Home;


