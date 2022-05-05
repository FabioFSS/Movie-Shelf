<<<<<<< HEAD
// import React from 'react'
// import './styles.scss'
// import logo from "../../assets/logo.png";
// import profile from "../../assets/profile.png";

// export const Menu = () => {
//     return (
//         <div className='navbar'>
//             <div style={{ display: "flex", width: "600px" }}>
//                 <h1 className='menu'>Tv</h1>
//                 <h1 className='menu'>Series</h1>
//                 <h1 className='menu'>Movies</h1>
//             </div>
//             <img className='logo' src={logo} />
//             <div style={{ display: "flex", alignItems: "center", width: "600px" }}>
//                 <input type="text" name="search" className='serch' placeholder='Search' />
//                 <img className='profile' src={profile} onclick="" />
//             </div>
//         </div>
//     );
// }


import React from 'react'
import './styles.scss'
import logo from "../../assets/logo.png";
import profile_pic from "../../assets/profile.png";
=======
import React from 'react'
import './styles.scss'
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
>>>>>>> e47083bc0710f8ab21bbc991f926d918ebafa8bc

export const Menu = () => {
    return (
        <div className='navbar'>
            <div style={{ display: "flex", width: "600px" }}>
<<<<<<< HEAD
                <h1 className='menu'>TV Series</h1>
=======
                <h1 className='menu'>Tv</h1>
                <h1 className='menu'>Series</h1>
>>>>>>> e47083bc0710f8ab21bbc991f926d918ebafa8bc
                <h1 className='menu'>Movies</h1>
            </div>
            <img className='logo' src={logo} />
            <div style={{ display: "flex", alignItems: "center", width: "600px" }}>
<<<<<<< HEAD
                <input type="text" name="search" className='search' placeholder='Search' />
                <img className='profile_pic' src={profile_pic} onclick="" alt="profile data pic"/>
=======
                <input type="text" name="search" className='serch' placeholder='Search' />
                <img className='profile' src={profile} onclick="" />
>>>>>>> e47083bc0710f8ab21bbc991f926d918ebafa8bc
            </div>
        </div>
    );
}