
import React from 'react'
import image from "../assets/Tanishq.jpeg"
import image1 from "../assets/Tanishq1.jpeg"
import image2 from "../assets/Tanishq2.jpeg"
import image3 from "../assets/Tanishq3.jpeg"
import image4 from "../assets/Tanishq4.jpeg"
import image6 from "../assets/Tanishq6.jpeg"

const About = () => {
  return (
    <>

<div>
     
<div style={{margin:"auto", border:"1px solid blue", display:'flex', gap:'10px' }}>

    <div>
    <div style={{width:"100%", background:"Green"}}>
    <marquee>My Hero!</marquee>
    </div>
    <img width={"500px"} height={"400px"} src={image} alt="" />
    </div>

   <div>
    <div style={{width:"100%", background:"Red"}}>
    <marquee>My Love!</marquee>
    </div>
    <img width={"500px"} height={"400px"} src={image1} alt="" />
    </div>
   

    <div>
    <div style={{width:"100%", background:"Blue"}}>
    <marquee>My Son!</marquee>
    </div>
    <img width={"500px"} height={"400px"} src={image3} alt="" />
    </div>
    </div>
  


   <div  style={{margin:"auto", border:"1px solid blue", display:'flex', gap:'10px' }}>



    <div>
    <div style={{width:"100%", background:"SpringGreen"}}>
    <marquee>My Om!</marquee>
    </div>
    <img width={"500px"} height={"400px"} src={image2} alt="" />
    </div>

    <div>
    <div style={{width:"100%", background:"pink"}}>
    <marquee>My Destiny!</marquee>
    </div>
    <img width={"500px"} height={"400px"} src={image4} alt="" />
    </div>

    <div>
    <div style={{width:"100%", background:"Orange"}}>
    <marquee>Tanishq Sandeep Damodhare!</marquee>
    </div>
    <img width={"500px"} height={"400px"} src={image6} alt="" />
    </div>

</div>

    </div>

    </>



  )
}

export default About