function Card({ item = {}, isLoading }: CardProps ) {
    const { id, poster_path, backdrop_path, vote_average, media_type, title, name, release_date, adult, type } = item;

    const isAdvert = type === "advert";
    const availableImage = poster_path ? poster_path : backdrop_path;

    return (
        <div className="overflow-hidden group cursor-pointer">
        {/* <Link to={`/${media_type ? media_type : postType}/${id}`}> */}

            <div className="h-[270px] relative">
                <div className="
                    overflow-hidden
                    absolute top-0 right-0 bottom-0 left-0 h-full w-full 
                    rounded-2xl 
                    border border-gray-300/10
                    group-hover:border-yellow-500
                    transition duration-150 ease-in-out
                ">

                </div>
            </div>
            
            <h2>{title}</h2>
        {/* </Link> */}
        </div>
    )
}

export default Card;

type CardProps = {
    item?: any;
    isLoading?: boolean;
    postType?: any;
    url?: string;
};