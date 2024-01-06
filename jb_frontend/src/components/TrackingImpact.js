import React from "react";
import useFetch from "../hooks/useFetch";
import "../styles/TrackingImpact.css"

function TrackingImpact(){
    const {loading, error, data} = useFetch("http://localhost:1338/api/tracking-impacts?populate=*")
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="TrackingImpact">
            <div className="container">
                <div className="TrackingTitle">
                    <h2>Tracking Impact</h2>
                    <p>______________</p>
                </div>
                <div className="TrackingGrid">
                    {data.map((story) =>{
                            return(
                                <div className="GridItem" key={story.id}>
                                    <div className="Headline">
                                        <p>{story.attributes.SingleLineSummary}</p>
                                    </div>
                                    <div className="Label">
                                        Original Article
                                    {story.attributes.OriginalArticle.map((article) =>{
                                        return(
                                                <div className="Article">
                                                    <a className="ArticleText" href={article.ArticleURL} target="_blank"> <p>{article.ArticleHeadline}</p></a>
                                                </div>
                                        )
                                    })}
                                    </div>
                                    <div className="Label">
                                        Impact Article
                                    {story.attributes.ImpactArticle.map((article) =>{
                                        return(
                                                <div className="Article">
                                                    <a className="ArticleText" href={article.ArticleURL} target="_blank"> <p>{article.ArticleHeadline}</p></a>
                                                </div>
                                        )
                                    })}
                                    </div>
                                </div>
                            )
                    })}
                </div>
            </div>
        </div>
    )
};


export default TrackingImpact
