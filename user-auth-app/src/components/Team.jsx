import React from 'react'
import image from "../assets/Tanishq.jpeg"
import image1 from "../assets/Tanishq1.jpeg"
import image3 from "../assets/Tanishq3.jpeg"

const Team = () => {
  return (
    <>

      <div>

        <div className='flex justify-between' >

          <div>
            <div >
              <marquee>My Hero!</marquee>
            </div>
            <img width={"500px"} height={"400px"} src={image} alt="" />
          </div>

          <div>
            <div >
              <marquee>My Love!</marquee>
            </div>
            <img width={"500px"} height={"400px"} src={image1} alt="" />
          </div>


          <div>
            <div >
              <marquee>My Son!</marquee>
            </div>
            <img width={"500px"} height={"400px"} src={image3} alt="" />
          </div>
        </div>
      </div>

    </>



  )
}

export default Team