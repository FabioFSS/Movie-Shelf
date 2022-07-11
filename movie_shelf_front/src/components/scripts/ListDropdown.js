// react
import React, { useContext, useState, useEffect } from "react";

// styles
import styles from "../styles/ListDropdown.module.css";

// contexts
import AuthContext from "../../contexts/AuthContext";

// utils
import useAxios from "../../utils/useAxios";

function ListDropdown({ content_id, content_type }) {
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

    function DropdownItem(props) {
        return (
            <>
                <span className="icon-left">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </>
        );
    }

    const add_to_list = (id) => {
        api.post(`/list_content/${user.username}/${id}`, {
            content_id: content_id,
            content_type: content_type,
        });
    };

    let lists_html = [];

    for (let i = 0; i < lists.length; i++) {
        lists_html.push(
            <DropdownItem>
                <button onClick={() => add_to_list(lists[i].id)}>
                    {lists[i].name}
                </button>
            </DropdownItem>
        );
    }

    return <div className={styles.dropdown}>{lists_html}</div>;
}

export default ListDropdown;
