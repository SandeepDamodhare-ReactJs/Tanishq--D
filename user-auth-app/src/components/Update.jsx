
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UploadButton } from "@bytescale/upload-widget-react";

const Update = () => {
    const [image, setImage] = useState("")
    const options = {
        apiKey: "free", // Get API key: https://www.bytescale.com/get-started
        maxFileCount: 1
    };


    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        address: '',
        about: '',
        image: ""
    });

    const [email, setEmail] = useState('');

    useEffect(() => {

        const storedEmail = localStorage.getItem('email');
        if (storedEmail) {
            setEmail(storedEmail);
        }


        const fetchData = async () => {
            console.log("email", storedEmail);
            try {
                const response = await axios.post('https://tanishqmylove-1.onrender.com/user/single', { email: storedEmail }); // Replace with your API endpoint
            if(response){
                console.log("res", response.data);
                setFormData(response.data.users)
            }
    
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prevData) => ({ ...prevData, file: e.target.files[0] }));
    };

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
let newFormData = {...formData, image}

// console.log("new update form data", newFormData);

        try {
            const response = await axios.patch(`https://tanishqmylove-1.onrender.com/user/edit/${formData._id}`, newFormData);
            if (response.data.success) {
                alert(response.data.msg)
                navigate('/')
            } 
        } catch (error) {
            console.error(error);

        }
    };



    const handleDelete = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.delete('http://localhost:8080/user/delete', {
                data: { email }
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            localStorage.clear();
            alert("success");
            window.location.reload();
            navigate("/login");
            console.log(response.data);

        } catch (error) {
            console.error(error);

        }
    };
    console.log("formdata", formData);

    return (
        <form className="font-[sans-serif] max-w-4xl mx-auto m-10 py-10" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        name="name"
                        placeholder="First Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                    </svg>
                </div>
                <div className="relative flex items-center">
                    <input
                        type="number"
                        name="mobile"
                        placeholder="Phone No."
                        value={formData.mobile}
                        onChange={handleChange}
                        className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
                    />
                    <svg fill="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 64 64">
                        <path d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.681-5.04-5.494-6.73-8.015l2.155-1.505a5 5 0 0 0 1.238-6.963l-4.527-6.479a5.006 5.006 0 0 0-6.93-1.339l-2.639 1.76a5 5 0 0 0-2.306 3.059c-.44 1.636-2.23 10.526 10.797 23.553 8.727 8.727 15.956 11.86 20.777 11.86a12.543 12.543 0 0 0 2.776-.304 5 5 0 0 0 3.059-2.306l1.76-2.639a5.004 5.004 0 0 0-1.338-6.931zM45.6 54.52c-1.416.382-7.566 1.25-19.627-10.81-11.282-11.282-10.866-18.117-10.317-20.075a3 3 0 0 1 1.384-1.835l2.639-1.76a3.005 3.005 0 0 1 4.158.804l4.528 6.479a3 3 0 0 1-.743 4.175l-3.468 2.42 1.015 1.516c1.892 2.829 4.384 5.819 7.353 8.788s5.959 5.461 8.788 7.353l1.516 1.015 2.42-3.468a3 3 0 0 1 4.175-.742l6.479 4.527a3 3 0 0 1 .804 4.158l-1.76 2.639a3 3 0 0 1-1.835 1.383z"></path>
                    </svg>
                </div>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 5.85 11.35 6.12 11.63.39.39 1.02.39 1.41 0C13.15 20.35 19 14.25 19 9c0-3.87-3.13-7-7-7zm0 15.33C10.11 15.15 7 11.25 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.25-3.11 6.15-5 8.33zM12 5.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S13.38 5.5 12 5.5z" fill="#bbb" stroke="#bbb"></path>
                    </svg>
                </div>
                <div className="relative flex items-center">
                    <input
                        type="text"
                        name="about"
                        placeholder="About"
                        value={formData.about}
                        onChange={handleChange}
                        className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#007bff] outline-none"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-7-7zm3 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-4V3.5L18.5 10H13z" fill="#bbb" stroke="#bbb"></path>
                    </svg>
                </div>
                <div className="relative flex items-center">
                    <UploadButton options={options}
                        onComplete={files => setImage(files.map(x => x.fileUrl).join("\n"))}>
                        {({ onClick }) =>
                            <button onClick={onClick}>
                                Upload a file...
                            </button>
                        }
                    </UploadButton>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M20 6h-3.17L15 4H9L7.17 6H4v14h16V6zm-8 11c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" opacity=".3"></path>
                        <path d="M12 8c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm8-13h-3.17L15 4H9L7.17 6H4v14h16V6zm0 14H4V6h3.17L9 4h6l1.83 2H20v14z"></path>
                    </svg>
                </div>
                <div className="col-span-2 flex items-center justify-center sm:justify-start" style={{ justifyContent: "space-between" }}>
                    <button type="submit" className="inline-flex items-center px-10 py-2.5 text-sm bg-[#007bff] text-white rounded-full hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50">
                        Update
                    </button>



                    <div className="col-span-2 flex items-center justify-center sm:justify-start">
                        <button type="submit" onClick={handleDelete} className="inline-flex items-center px-10 py-2.5 text-sm bg-[red] text-white rounded-full hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#0056b3] focus:ring-opacity-50">
                            Delete
                        </button>
                    </div></div>
            </div>
        </form>
    );
};

export default Update;
