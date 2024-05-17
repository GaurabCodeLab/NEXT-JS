"use client"
import { useState } from "react";

const PostData = ()=>{
    const [formData, setFormData] = useState({
        name : "",
        email : ""
    });

const handleChange = (e)=> setFormData({...formData, [e.target.name] : e.target.value});

const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:3000/api", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        });
        if(!response.ok){
            throw new Error("Something went wrong");
        };
        const result = await response.json();
        console.log("Data posted successfully");
        setFormData({
            name : "",
            email : ""
        });
    } catch (error) {
        console.log("Error in postind data", error);
    }
}
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/> <br /> <br />
            <input type="email" name="email" value={formData.email} onChange={handleChange} /> <br /> <br />
            <button>Submit the from</button> <br /> <br />
        </form>
        </>
    )
};

export default PostData;