import React, { useState } from 'react'
import capa from "../../components/image-item/berserk.jpg"
import profile from "../../assets/profile.png"
import plus from "../../assets/comments/plus.png"
import minus from "../../assets/comments/minus.png"
import sende from "../../assets/comments/sende.png"
import star from "../../assets/comments/star.png"
import { FaTrash } from "react-icons/fa";
import './styles.scss'

const comments = [
    {comment: "Muito bom!"},
    {comment: "Não gostei da animação"},
    {comment: "História muito boa!"},
    {comment: "Não recomendo."}
]

export default function Ratings() {

    const [vote, setVote] = useState(0);
    const [message, setMessage] = useState("");

    function plusVote() {
        if (vote < 10) setVote(vote+1)
    }

    function minusVote() {
        if (vote > 0) setVote(vote-1)
    }
      
    return (           
        <div className='wrapper-ratings'>  
            <div className='insert-item'>
                <input 
                    className="input" 
                    type="text" value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    placeholder="Leave your movie review here..."
                />
                <div className='container-vote'>
                    <p className='vote'>{vote}</p>
                    <img src={star} className="icon-vote"/>
                </div>
                <button className='button' onClick={minusVote}>
                    <img src={minus} className="icon-img"/>
                </button>
                <button className='button' onClick={plusVote}>
                    <img src={plus} className="icon-img"/>
                </button >
                <button className='button'>
                    <img src={sende} className="icon-img"/>
                </button>
            </div>
            <div className='cotainer-cards'>
                {
                    comments.map((item, key) => (
                        <div className='container-ratings' key={key}>
                            <img src={capa} className="folder-rating"/>
                            <div className='container-info-card'>
                                <div className='info-card'>
                                    <img src={profile} className="profile-img"/>
                                    <p className='name-user'>Name User</p>
                                    <FaTrash size={20} color="white" className='icons-trash'/>
                                </div>
                                <p className='comments-card'>{item.comment}</p>
                                <div className='vote'>
                                    <img src={star} className="icon-vote"/>
                                    <p className='text-vote'>{vote}/10</p>
                                </div>
                            </div>
                        </div>
                    ))  
                }       
            </div>
        </div>
    );
}