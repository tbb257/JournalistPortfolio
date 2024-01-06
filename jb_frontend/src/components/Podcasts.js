import React from "react";
import useFetch from "../hooks/useFetch";
import YoutubeFetch from "../hooks/YoutubeFetch";
import "../styles/Podcasts.css"

function Podcasts(){
    const {loading, error, data} = useFetch("http://localhost:1338/api/spotify-podcasts")
    const {YoutubeLoading, YoutubeError, YoutubeData} = YoutubeFetch("http://localhost:1338/api/youtube-interviews")

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    if (YoutubeLoading) return <p>Loading...</p>
    if (YoutubeError) return <p>Error!</p>

    console.log(YoutubeData)
    return (
        <div className="Podcasts-Interviews">
            <div>
                <div className="Heading">
                    <h2>Podcasts & Live Interviews</h2>
                </div>
                <div className="PodcastTitle">
                    Asian Enough: Season 2
                </div>




                <div className="PodcastsGrid">
                {data.map(episode =>{
                    if (episode.attributes.SpotifySeries !== null){
                        return(
                            <div key={episode.id}>
                                <iframe className="PodcastEpisodes" src={episode.attributes.Src_Link}
                                frameBorder="0" allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                        )
                    }
                })}
                </div>




                <div className="PodcastTitle">
                    Additional Podcasts
                </div>
                <div className="PodcastsGrid">
                {data.map(episode =>{
                    if (episode.attributes.SpotifySeries == null){
                        return(
                            <div key={episode.id}>
                                <iframe className="PodcastEpisodes" src={episode.attributes.Src_Link}
                                frameBorder="0" allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                        )
                    }
                })}
                </div>


                <div className="PodcastTitle">
                    Youtube Interviews & Discussions
                </div>
                <div className="PodcastsGrid">
                {YoutubeData.map(video =>{
                        return(
                            <div key={video.id}>
                                <iframe className="PodcastEpisodes" src={video.attributes.YoutubeSrc}
                                frameBorder="0" allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            </div>
                        )
                })}
                </div>
            </div>
        </div>
    )
};


export default Podcasts
