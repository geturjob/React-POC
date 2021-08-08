import { Fragment, useEffect, useState } from "react";
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import classes from './HeaderCartButton.module.css';
import { useSelector } from "react-redux";

const HeaderCartButton =(props)=>{
    const [doBump, setdoBump] = useState(false);
    const cartItems = useSelector(state=>state.Cart.cartItems);

    let btnClasses = `${classes.button} ${doBump ? `${classes.bump}`:``}`;

    console.log(cartItems)
    const totalCartItems = cartItems.reduce((count, data)=>{
        let amount = +data.Qnt;
        return  count + amount;
    }, 0);

    useEffect(()=>{
        if(cartItems.length == 0)
        {
            return;
        }

        setdoBump(true);

        const timer = setTimeout(()=>{
            setdoBump(false);
        }, 300);

        return(()=>{
            clearTimeout(timer);
        })

    },[cartItems]);

    return(
        <Fragment>
            <button className={btnClasses} onClick={props.enableBackdrop}>
                <span className={classes.icon}>&#128722;</span>
                <span className={classes.cartText}>My Cart</span>
                <span className={classes.badge}>{totalCartItems}</span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;