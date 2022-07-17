// react
import React, { useContext, useState, useEffect } from "react";

// styles
import styles from "./styles.module.css";

// components
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentSummary from "../../components/scripts/ContentSummary";

// assets
import std_list from "../../assets/std_list.png";
import plus_icon from "../../assets/plus_icon.png";

// contexts
import AuthContext from "../../contexts/AuthContext";

// hooks
import useAxios from "../../utils/useAxios";
import { Link } from "react-router-dom";

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
                    const response = await api.get(`/list/${user.username}`);
                    setLists(response.data);
                } catch {
                    setLists("Something went wrong");
                }
            }
        };
        fetchData();
    }, []);

    const DeleteList = (id) => {
        api.delete(`/list_id/${id}`);
        window.location.reload();
    }

    let lists_html = [];

    for (let i = 0; i < lists.length; i++) {
        lists_html.push(
            <>
                <button onClick={() => {
                    DeleteList(lists[i].id);
                }} >Delete</button>
                <ContentSummary
                    link={`/listdetails/${lists[i].id}`}
                    title={lists[i].name}
                    description={lists[i].description}
                    banner={lists[i].image ? lists[i].image : std_list}
                />
            </>
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
                <div className={styles.lists_label_new}>
                    <h1 className={styles.my_lists_label}>My lists</h1>
                    <Link to="/newlist">
                        <img
                            src={plus_icon}
                            className={styles.new_list_link}
                        ></img>
                    </Link>
                </div>
                {lists_html.length ? (
                    <div className={styles.lists}>{lists_html}</div>
                ) : (
                    <div className={styles.no_lists}>
                        <p>No lists yet</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Lists;
