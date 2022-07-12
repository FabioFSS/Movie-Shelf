// react
import React, { useContext, useState, useEffect } from "react";

// styles
import styles from "./styles.module.css";

// contexts
import AuthContext from "../../contexts/AuthContext";

// utils
import useAxios from "../../utils/useAxios";

function NewList() {
    // contexts
    const { user } = useContext(AuthContext);

    // states
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);
    const [image, setImage] = useState(null);

    const api = useAxios();

    const doSubmit = (e) => {
        e.preventDefault();

        api.post(`http://127.0.0.1:8000/list/${user.username}`, {
            name,
            description,
            image,
        }).then((response) => {
            if (response.status == 200) {
                alert("Saved successfully.");
            } else {
                alert("Something went wrong.");
            }
        });
    };

    window.scrollTo({
        top: 0,
    });

    return (
        <div className={styles.page_body}>
            <form className={styles.new_list_form}>
                <input
                    type="text"
                    label="list_name"
                    name="list_name"
                    placeholder="List name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    label="list_description"
                    name="list_description"
                    placeholder="List description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button
                className={styles.create_button}
                    name="createbutton"
                    type="submit"
                    onClick={(e) => doSubmit(e)}
                >
                    Create
                </button>
            </form>
        </div>
    );
}

export default NewList;
