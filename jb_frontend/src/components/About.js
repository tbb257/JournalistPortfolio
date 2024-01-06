import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/About.css"

function About(){
    const {data,loading,error} = useFetch("http://localhost:1338/api/portfolios?populate=*")

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="AboutMe">
            <div className=" container">
                <div className="col-6 AboutMeText">
                <h2>A little about me</h2>
                <p>___________________</p>
                <p>
                I'm a born and raised New Yorker, first in Queens and later on Long Island. After years of resistance, I moved
                to San Francisco in 2019. I'm a senior tech reporter and editor at The Guardian. I've been working as a journalist
                since about 2013. I'm half Bangladeshi, half Filipina. In other words, I'm super Asian.
                </p>
                <p>
                The good news is I ~ can ~ speak Bangla
                pretty fluently, the bad news is it doesn't sound pretty when I do. My Tagalog, on the other hand, basically starts and ends
                at telling you to come and eat or asking you how much something is. Since I gave up my dream of becoming an archaeologist when
                I was about 8, reporting is all I've ever wanted to do.  Before The Guardian,I worked at the Los Angeles Times, Recode, BuzzFeed News,
                and Politico. I went to Lehigh University in Pennsylvania for undergrad.
                </p>
                </div>
                <div className="col-6">

                </div>
                <div className="row mb-4">
                    {data.map((company =>{
                        let logo = company.attributes.Logo
                        return(
                        <div className="col-3" key={company.id}>
                            <a href={`${company.attributes.LinkToProfile}`} target="_blank">
                                <img className="Logo" alt="logo" src={`http://localhost:1338${logo.data.attributes.url}`}/>
                            </a>
                        </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
};


export default About
