import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/Home.css"


function Home(){
    const {data, loading, error} = useFetch("http://localhost:1338/api/email/")
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="HomePage">
            <div className="TitleText">
                <p>Johana Bhuiyan</p>
            </div>
            <p className="LineBreak">___________________________________________________________</p>
            <div className="parent">
                <div className="child HomePage-Text">
                Senior Tech Report and Editor | The Guardian | 
                </div>
                <div className="child EmailAddress" onClick={(e) => {window.location.href =`mailto:${data.attributes.EmailAddress}`;}}>
                {data.attributes.EmailAddress}
                </div>
            </div>
            <div className="HomePage-Text">
                <p>Signal,Whatsapp, Telegram: 415 630-3604</p>
            </div>
        </div>
    )
};


export default Home
