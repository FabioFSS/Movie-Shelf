// react
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

// other libs
import axios from "axios";

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
    const [movieId] = useState(window.location.href.split("=")[1]);
    const [vote, setVote] = useState(0);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState("hidden");

    useEffect(() => {
        movieId == undefined ? setVisible("hidden") : setVisible("visible");
    }, [movieId]);

    function addComment() {
        const res = axios
            .post("http://localhost:8000/login/", {
                idMovieTv: movieId,
                idUser: "00000",
                comment: message,
                vote: vote,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data[0] == "success") {
                }
            });
    }

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
                    // onClick={() => {addComment}}
                >
                    <img src={sende} className={styles.icon_img} />
                </button>
            </div>
            <div className={styles.cotainer_cards}>
                {comments.map((item, key) => (
                    <div className={styles.container_ratings} key={key}>
                        <img src={capa} className={styles.folder_rating} />
                        <div className={styles.container_info_card}>
                            <div className={styles.info_card}>
                                <img
                                    src={profile}
                                    className={styles.profile_img}
                                />
                                <p className={styles.name_user}>Name User</p>
                                <FaTrash
                                    size={20}
                                    color="white"
                                    className={styles.icons_trash}
                                />
                            </div>
                            <p className={styles.comments_card}>
                                {item.comment}
                            </p>
                            <div className={styles.vote_image}>
                                <img src={star} className={styles.icon_vote} />
                                <p className={styles.text_vote}>{vote}/10</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
