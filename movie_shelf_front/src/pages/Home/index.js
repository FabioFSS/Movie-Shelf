// react
import React, {useState, useEffect} from "react";

// styles
import styles from "./styles.module.css";

// components
import HomeHeader from "../../components/scripts/HomeHeader";
import Slider from "../../components/scripts/Slider";
import ContentBox from "../../components/scripts/ContentBox";

// hooks
import useAxios from "../../utils/useAxios";

function Home() {
    // hooks
    const api = useAxios();

    // states
    const [latestTV, setLatestTV] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([])
    
    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(
                    `/latesttvshows/`
                );
                setLatestTV(response.data);
            } catch {
                setLatestTV("Something went wrong");
            }
        };
        fetchData();
    }, []);

    let latest_tv_boxes = [];

    for (let i = 0; i < latestTV.length; i++) {
        latest_tv_boxes.push(
            <ContentBox
                link={`/tvdetails:id=${latestTV[i].id}`}
                title={latestTV[i].name}
                banner={latestTV[i].poster}
            />
        );
    }

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(
                    `/upcomingmovies/`
                );
                setUpcomingMovies(response.data);
            } catch {
                setUpcomingMovies("Something went wrong");
            }
        };
        fetchData();
    }, []);

    let upcoming_movies_boxes = [];

    for (let i = 0; i < upcomingMovies.length; i++) {
        upcoming_movies_boxes.push(
            <ContentBox
                link={`/details:id=${upcomingMovies[i].id}`}
                title={upcomingMovies[i].name}
                banner={upcomingMovies[i].poster}
            />
        );
    }

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <HomeHeader></HomeHeader>
            <Slider title="Upcoming movies" boxes={upcoming_movies_boxes} ></Slider>
            <Slider title="Latest TV shows" boxes={latest_tv_boxes} ></Slider>
        </div>
    );
}

export default Home;
