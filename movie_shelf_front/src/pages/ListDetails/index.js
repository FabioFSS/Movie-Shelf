// react
import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// styles
import styles from "./styles.module.css";

// components
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ContentSummary from "../../components/scripts/ContentSummary";
import ContentBanner from "../../components/scripts/ContentBanner";

// contexts
import AuthContext from "../../contexts/AuthContext";

// hooks
import useAxios from "../../utils/useAxios";

function ListDetails() {
    // contexts
    const { user } = useContext(AuthContext);
    const { id } = useParams();

    // hooks
    const api = useAxios();

    // states
    const [content, setContent] = useState([]);
    
    // states
    const [list, setList] = useState([]);

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/list_content/${user.username}/${id}`
                    );
                    setContent(response.data);
                } catch {
                    setContent("Something went wrong");
                }
            }
        };
        fetchData();
    }, [id, user]);

    // recovers from the backend the logged user's data
    useEffect(() => {
        const fetchData = async () => {
            if (user) {
                try {
                    const response = await api.get(
                        `/list_id/${id}`
                    );
                    setList(response.data);
                } catch {
                    setList("Something went wrong");
                }
            }
        };
        fetchData();
    }, [id, user]);

    let content_html = [];

    for (let i = 0; i < content.length; i++) {
        let content_link
        if (content[i].content_type === 'tv_show'){
            content_link = `/tvdetails:id=${content[i].content_id}`
        }
        else{
            content_link = `/details:id=${content[i].content_id}`
        }

        content_html.push(
            <ContentSummary
                link={content_link}
                title={content[i].name}
                description={content[i].overview}
                banner={content[i].poster}
            />
        );
    }

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.list_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.list_name_label}>{list.name}</h1>
                <ContentBanner
                    banner={list.image}
                    description={list.description}
                ></ContentBanner>
                <div className={styles.content_list}>{content_html}</div>
            </div>
        </div>
    );
}

export default ListDetails;
