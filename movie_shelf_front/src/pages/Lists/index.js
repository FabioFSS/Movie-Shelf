import React from "react";
import styles from './styles.module.css';
import Navbar from "../../components/scripts/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import ProfileHeader from "../../components/scripts/ProfileHeader";
import ProfileBackground from "../../components/scripts/ProfileBackground";
import ListSummary from "../../components/scripts/ListSummary";
import banner1 from "../../assets/lists_banners/favorites.png"
import banner2 from "../../assets/lists_banners/banner2.png"
import banner3 from "../../assets/lists_banners/banner3.png"
import banner4 from "../../assets/lists_banners/banner4.png"
import banner5 from "../../assets/lists_banners/banner5.png"

function Lists() {
    return (
        <div className={styles.page_body}>
            <ProfileBackground></ProfileBackground>
            <div className={styles.lists_navbar}>
                <Router>
                    <Navbar></Navbar>
                </Router>
            </div>

            <div className={styles.lists_body}>
                <ProfileHeader></ProfileHeader>
                <h1 className={styles.my_lists_label}>My lists</h1>
                <div className={styles.lists}>
                    <ListSummary title="Favorites" description="Movies and TV Shows you like the most" banner={banner1} link="/lists"></ListSummary>
                    <ListSummary title="Custom list 1" description="One of your custom lists" banner={banner2} link="/lists"></ListSummary>
                    <ListSummary title="Custom list 2" description="One of your custom lists" banner={banner3} link="/lists"></ListSummary>
                    <ListSummary title="Custom list 3" description="One of your custom lists" banner={banner4} link="/lists"></ListSummary>
                    <ListSummary title="Custom list 4" description="One of your custom lists" banner={banner5} link="/lists"></ListSummary>
                </div>
            </div>
        </div>
    );
}

export default Lists;