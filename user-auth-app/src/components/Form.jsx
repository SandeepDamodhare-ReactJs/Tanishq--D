
import React, { useEffect, useState } from 'react';
import image6 from '../assets/Tanishq6.jpeg';
import '../App.css';
import axios from 'axios';

const Form = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');
  const [formData, setFormData] = useState({})
  useEffect(() => {
    setUsername(localStorage.getItem("name") || '');
    setEmail(localStorage.getItem("email") || '');
    setMobile(localStorage.getItem("mobile") || '');
    setAddress(localStorage.getItem("address") || '');
    setAbout(localStorage.getItem("about") || '');
  }, []);


  let storeEmail = localStorage.getItem("email")

  const fetchData = async () => {

    try {
      const response = await axios.post('http://localhost:8080/user/single', { email: storeEmail }); // Replace with your API endpoint
      if (response) {
        console.log("res", response.data);
        setFormData(response.data.users)
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <>
      <marquee style={{ backgroundColor: "red" }}>Tanishq Sandeep Damodhare!</marquee>
      <div className="main">
        <div className="form-container">
          <div className="image-container">
            <div className="top-header">
              <div>
                {formData.image ? (
                  <img src={formData.image} alt="Tanishq" />
                ) : (
                  <img src={image6} alt="Tanishq" />
                )}
              </div>

            </div>
          </div>
        </div>
        <div className="info-container">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td><span>{formData.name}</span></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><span>{formData.email}</span></td>
              </tr>
              <tr>
                <td>Mobile:</td>
                <td><span>{formData.mobile}</span></td>
              </tr>
              <tr>
                <td>Address:</td>
                <td><span>{formData.address}</span></td>
              </tr>
              <tr>
                <td>About:</td>
                <td><span>{formData.about}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Form;
