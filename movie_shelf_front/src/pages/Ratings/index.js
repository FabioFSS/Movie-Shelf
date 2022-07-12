// react
import React, { useEffect, useState, useContext } from "react";
import { FaTrash } from "react-icons/fa";

// other libs
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import useAxios from "../../utils/useAxios";

// styles
import styles from "./styles.module.css";

// assets
import capa from "../../assets/image-item/berserk.jpg";
import profile from "../../assets/profile.png";
import plus from "../../assets/comments/plus.png";
import minus from "../../assets/comments/minus.png";
import sende from "../../assets/comments/sende.png";
import star from "../../assets/comments/star.png";

const comments = [
    { comment: "Muito bom!" },
    { comment: "Não gostei da animação" },
    { comment: "História muito boa!" },
    { comment: "Não recomendo." },
];



export default function Ratings() {
    const [movieId] = useState(window.location.href.split("=")[1].split("#")[0]);
    const [poster] = useState(window.location.href.split("=")[1].split("#")[1]);
    const [vote, setVote] = useState(0);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState("hidden");
    const [comment, setComments] = useState(undefined);
    
    useEffect(() => {
        movieId == undefined ? setVisible("hidden") : setVisible("visible");
    }, [movieId]);

    const { userData } = useContext(AuthContext);

    const { user } = useContext(AuthContext);

    const api = useAxios();

    const addReview = async () => {

        const baseURL = `/reviews/${movieId}`;

        api.post(baseURL, {
            note: vote,
            comment: message,
            movie_tv_id: movieId,
            user_fk: user.user_id,
        })
        .then((response) => {
            if (response.status == 200) {
                alert("Salvo com sucesso!");
            }else {
                alert("Ops, algo deu errado!!");
            }
        });
                
    }
    
    console.log(comment);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(`/reviews/${movieId}`);
                setComments(response.data);
            } catch {
                alert("Algo deu errado!")
            }
        };
        fetchData();
    }, [message]);

    window.scrollTo({
        top: 0,
    });

    function plusVote() {
        if (vote < 10) setVote(vote + 1);
    }

    function minusVote() {
        if (vote > 0) setVote(vote - 1);
    }

    return (
        <div className={styles.wrapper_ratings}>
            <div className={styles.insert_item} style={{ visibility: visible }}>
                <input
                    className={styles.input}
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Leave your movie review here..."
                />
                <div className={styles.container_vote}>
                    <p className={styles.vote}>{vote}</p>
                    <img src={star} className={styles.icon_vote} />
                </div>
                <button className={styles.button} onClick={minusVote}>
                    <img src={minus} className={styles.icon_img} />
                </button>
                <button className={styles.button} onClick={plusVote}>
                    <img src={plus} className={styles.icon_img} />
                </button>
                <button
                    className={styles.button}
                    onClick={addReview}
                >
                    <img src={sende} className={styles.icon_img} />
                </button>
            </div>
            <div className={styles.cotainer_cards}>
                {comment && comment[0].map((item, key) => (
                    <div className={styles.container_ratings} key={key}>
                        <img src={poster} className={styles.folder_rating} />
                        <div className={styles.container_info_card}>
                            <p className={styles.comments_card}>
                                {item.comment}
                            </p>
                            <div className={styles.vote_image}>
                                <img src={star} className={styles.icon_vote} />
                                <p className={styles.text_vote}>{item.note}/10</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
