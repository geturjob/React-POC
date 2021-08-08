import { useSelector } from "react-redux";
import classes from './SuccessMsg.module.css';
import history from "../../../Service/RouteHistory.js";
import { useLocation } from "react-router";
import queryString from 'query-string';

const SuccessMsg =()=>{
    const address = useSelector(state=>state.Address.userAddress);

    const {search} = useLocation();
    
    const {totalBill, totalCartItems} = queryString.parse(search);

    const handleNavigate =()=>{
        history.push('/dashboard');
    }
    return(
        <section className={classes.successMsg}>
            <h2>Your order has been placed successfully</h2>
            <h3>
                Total Items:{` ${totalCartItems}`}
            </h3>
            <h3>
                Total Amount:{` ${totalBill}`}
            </h3>
            <p>
                Name: {` ${address.firstName} ${address.lastName}`}
            </p>
            <p>
                Email ID: {` ${address.email}`}
            </p>
            <p>
                Address: {` ${address.address1}, ${address.city} ${address.state} ${address.zip}`}
            </p>
            <button className={classes.button} onClick={handleNavigate}>Back To Dashboard</button>
        </section>
    );
}

export default SuccessMsg;