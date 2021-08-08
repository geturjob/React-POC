import {connect } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem.js';
import history from '../../Service/RouteHistory.js';
import React from 'react';
import { Fragment } from 'react';

class CartClass extends React.Component{
    constructor(props){
        super(props);
    }

    orderHandler(){
        this.props.onClose();
        history.push('/checkout');
    }

    render(){
        const totalBill = this.props.cartItems.reduce((total, data)=>{
            const price = +data.Price;
            const qnt = data.Qnt;
            return total + price * qnt;
        }, 0);
        const cartItem = (<ul className={classes['cart-items']}>
            {this.props.cartItems.map((item)=>(
                <CartItem key={item.Id} 
                          Id={item.Id}
                          Name={item.Name}
                          Price={item.Price}
                          Qnt={item.Qnt}
                          ></CartItem>
            ))}
        </ul>);

        return(
            <Fragment>
                {cartItem}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalBill}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button-cancel']} onClick={this.props.onClose}>Cancel</button>
                    {this.props.cartItems.length > 0 && <button className={classes.button} onClick={this.orderHandler.bind(this)}>Order</button>}
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        cartItems:state.Cart.cartItems,
        address:state.Address.userAddress
    }

}

export default connect(mapStateToProps)(CartClass);