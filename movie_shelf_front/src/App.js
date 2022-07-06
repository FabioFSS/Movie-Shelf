// react
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// utils
import PrivateRoute from "./utils/PrivateRoute";

// components
import Navbar from "./components/scripts/Navbar";

// contexts
import NavProvider from "./contexts/navbar";
import { AuthProvider } from "./contexts/AuthContext";

// pages
import Details from "./pages/Details";
import TvShows from "./pages/TvShows";
import TvDetails from "./pages/TvDetails";
import SeasonDetail from "./pages/SeasonDetail";
import EpisodeDetail from "./pages/EpisodeDetail";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ListDetails from "./pages/ListDetails";
import Lists from "./pages/Lists";
import Login from "./pages/LogIn";
import Progress from "./pages/Progress";
import ProgressDetailsOverview from "./pages/ProgressDetailsOverview";
import ProgressDetailsSeason from "./pages/ProgressDetailsSeason";
import Ratings from "./pages/Ratings";
import Reset from "./pages/Reset";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search"

export default function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <NavProvider>
                    <Navbar />
                    <Routes>
                        {/* Profile routes */}
                        <Route path="/profile" element={<PrivateRoute />}>
                            <Route path="/profile" element={<Profile />} />
                        </Route>
                        <Route path="/lists" element={<PrivateRoute />}>
                            <Route path="/lists" element={<Lists />} />
                        </Route>
                        <Route path="/progress" element={<PrivateRoute />}>
                            <Route path="/progress" element={<Progress />} />
                        </Route>

                        <Route
                            path="/progressdetailsoverview"
                            element={<PrivateRoute />}
                        >
                            <Route
                                path="/progressdetailsoverview"
                                element={<ProgressDetailsOverview />}
                            />
                        </Route>
                        <Route
                            path="/progressdetailsseason"
                            element={<PrivateRoute />}
                        >
                            <Route
                                path="/progressdetailsseason"
                                element={<ProgressDetailsSeason />}
                            />
                        </Route>
                        <Route path="/settings" element={<PrivateRoute />}>
                            <Route path="/settings" element={<Settings />} />
                        </Route>

                        {/* Main routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/details:id" element={<Details />} />
                        <Route path="/tv" element={<TvShows />} />
                        <Route path="/tvdetails:id" element={<TvDetails />} />
                        <Route path="/listdetails" element={<ListDetails />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/ratings:id" element={<Ratings />} />
                        <Route path="/ratings" element={<Ratings />} />
                        <Route path="/reset" element={<Reset />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/search:keyword" element={<Search />} />
                        <Route path="/seasondetail:id" element={<SeasonDetail />} />
                        <Route path="/episodedetail:id" element={<EpisodeDetail />} />
                    </Routes>
                </NavProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}
