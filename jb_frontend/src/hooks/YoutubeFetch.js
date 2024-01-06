import { useEffect, useState } from "react";

const YoutubeFetch = (url) => {
    const [YoutubeData, setData] = useState(null);
    const [YoutubeError, setError] = useState(null);
    const [YoutubeLoading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    }, [url])


    return {YoutubeLoading, YoutubeError, YoutubeData}
};


export default YoutubeFetch
