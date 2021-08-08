import classes from './Profile.module.css';
import { useState } from 'react';
import {Link } from 'react-router-dom';
import history from '../../Service/RouteHistory.js';

const Profile = () => {
    const [showItems, setShowItems] = useState(false);

    const handleButtonClick = () => {
        setShowItems(!showItems);
    }

    const navigateToCustomTheme =()=>{
        history.push('/customTheme');
        setShowItems(false);
    }

    const navToOrderDetails=()=>{
        history.push('/orderdetails');
        setShowItems(false);
    }

    const GuestUser = "GU"
    return (
        <div className={classes.profileData}>
            <button className={classes.userButton} onClick={handleButtonClick}>{GuestUser}</button>
            {showItems && <ul className={classes.listprofile}>
                <li className={classes.listItem} onClick={navigateToCustomTheme}>Custom Theme</li>
                <li className={classes.listItem} onClick={navToOrderDetails}>Total Oders</li>
            </ul>}
        </div>
    )
}

export default Profile;