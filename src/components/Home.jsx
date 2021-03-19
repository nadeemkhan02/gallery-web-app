import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageShow from "./ImageShow";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";



const Home = () => {
    //all used useState hooks
    const [images, setImages] = useState()
    const [show, setShow] = useState()

    // function for handle shoew
    const handleClick = (e) => {
        setShow(e)
    }

    //useEffect function for Api consuming
    useEffect(() => {

        //async function for api call
        const getData = async () => {
            const Images = await axios.get('https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0');
            setImages(Images.data)
            console.log(Images.data)
        }
        getData()
    }, [])

    //returning dom elements
    return (
        <>
            <div id="gallery">
                {images &&
                    images.map((e) =>
                        <>
                            <img onClick={() => handleClick(e.urls.raw)} data-toggle="modal" data-target="#exampleModalCenter" src={e.urls.raw} alt="images" />
                        </>
                    )
                }
            </div>
            <ImageShow Src={show} />
        </>
    );
}

export default Home;


