import React, {useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import axios from "axios";
import "../index.css";
import ImageShow from "./ImageShow";



const Home = () => {
    const [images, setImages] = useState()
    const [show, setShow] = useState()

    const handleClick = (e) =>{
        setShow(e)
    }

    useEffect(()=>{
        const getData = async() =>{
            const Images = await axios.get('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0')
            setImages(Images.data)
            console.log(Images.data)
        }
    getData()
    },[])
   
    return ( 
        <>
        <div id="gallery">          
        {images &&
            images.map((e)=>
            <>
                <img onClick={()=>handleClick(e.urls.raw)} data-toggle="modal" data-target="#exampleModalCenter" src={e.urls.raw} alt="images" />
            </>)
          }
          </div>
          <ImageShow Src={show} />
        </>
     );
}
 
export default Home;


