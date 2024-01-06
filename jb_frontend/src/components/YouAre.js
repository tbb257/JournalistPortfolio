import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/YouAre.css"

function YouAre(){
    const {data,loading,error} = useFetch("http://localhost:1338/api/social-medias/1")
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="YouAre">
        <div className="container">
            <div className="YouAreTitle">
            <h2>If you're here...</h2>
            <p>___________________</p>
            </div>
            <div className="row mb-3 Passage">
                <div className="col-6 YouAreText ">
                    <p>
                    You are probably a source, a potential source, or just curious about my work.
                    In any case, welcome! I made this site because a) I'm thirsty and b) I wanted
                    to make it easier for people who have a tip, might be interested in speaking to me for an article,
                    and/or want to speak anonymously about something sensitive to see examples of my work — especially stories
                    that are either investigative or are about more delicate topics.
                    </p>
                    <p>
                    I'm a tech accountability reporter, and I'm particularly focused on how some companies  exacerbate inequality
                    or further marginalize already disenfranchised communities. I used to be a future of transportation reporter
                    and mostly came at it from the same lens.
                    </p>
                </div>
                <div className="col-6 YouAreText">
                    <p>
                    While my primary function is to tell these stories and keep the powers that be accountable, I can't do it without
                    the courage and bravery of people who are willing to come forward and speak to me. So it's also a huge part of my
                    job to protect those sources. My hope is my previous work and ongoing coverage will show how dedicated I am to
                    ensuring that the identities of these people —potentially you⁠—are protected and to handling both anonymous and on-the-record
                    stories with care and sensitivity.
                    </p>
                    <p>
                    This site is a work in progress, but you can always keep up with my most recent stories and be subject to my tweets on
                    Twitter at <a href={data.attributes.URL}>{data.attributes.Handle}</a>.
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
};


export default YouAre
