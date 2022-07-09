// react
import React, {useContext, useState, useEffect} from "react";

// styles
import styles from "./styles.module.css";

// components
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentSummary from "../../components/scripts/ContentSummary";

// assets
import banner1 from "../../assets/lists_banners/favorites.png";

// contexts
import AuthContext from "../../contexts/AuthContext";

// hooks
import useAxios from "../../utils/useAxios";

function Lists() {
    // contexts
    const { user } = useContext(AuthContext);
    
    // hooks
    const api = useAxios();

    // states
    const [lists, setLists] = useState([]);

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/list/${user.username}`
                    );
                    setLists(response.data);
                } catch {
                    setLists("Something went wrong");
                }
            }
        };
        fetchData();
    }, []);

    let lists_html = [];

    for (let i = 0; i < lists.length; i++) {
        lists_html.push(
            <ContentSummary
                link={`/listdetails/${lists[i].id}`}
                title={lists[i].name}
                description={lists[i].description}
                banner={lists[i].image}
            />
        );
    }

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.lists_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.my_lists_label}>My lists</h1>
                <div className={styles.lists}>
                    {lists_html}
                </div>
            </div>
        </div>
    );
}

export default Lists;
