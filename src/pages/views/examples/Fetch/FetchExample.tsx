import { useEffect, useState } from "react";

import Card from "../../components/Card/Card";
import { getMovieListPopular } from "./src/services/apis/themoviedb/requests/Movies";

function FetchExample() {
    const [movies, setMovies] = useState<Request | null>(null);
    const [isLoading, setIsLoading] = useState(true)

    async function fetchMovie() {
        const res = await getMovieListPopular();
        setMovies(res)
        setIsLoading(false)
        console.log(res)
    }

    useEffect(() => {
        fetchMovie()
        setIsLoading(true)
    }, [])
    
    return (
        <div>
            <ul>
                {movies && movies?.results?.map((movie) => (
                    <Card key={movie.id} item={movie} />
                ))}
            </ul>
        </div>
    )
}

export default FetchExample;