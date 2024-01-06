import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/Stories.css"

function Stories(){
    const {loading, error, data} = useFetch("http://localhost:1338/api/stories")
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="Stories">
            <div >
                <div className="StoryTitle">
                <h2>Investigative Stories</h2>
                <p>______________</p>
                </div>
                <div className="StoryCategory">
                    <p>Stories based on internal company sources & internal documents</p>
                </div>
                <div className="story-grid">
                    {data.map((story) =>{
                        if (story.attributes.Sources === "Internal Sources"){
                            return(
                                <div className="grid-item" key={story.id}>
                                    <div className="headlines">
                                        <a className="url" href={story.attributes.url}><p>{story.attributes.Headline}</p></a>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>
                <div className="StoryCategory">
                    <p>Stories based on public records</p>
                </div>
                <div className="story-grid">
                    {data.map((story) =>{
                        if (story.attributes.Sources === "Public Records"){
                            return(
                                <div className="grid-item" key={story.id}>
                                    <div className="headlines">
                                        <a className="url" href={story.attributes.url}><p>{story.attributes.Headline}</p></a>
                                    </div>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>
        </div>
    )
};


export default Stories
