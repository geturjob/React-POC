import React from "react";
import { AddDataToCart, RemoveDataFromCart } from "../../Actions/ManageCart.js";
import  classes  from "./Cart.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class CartItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const addItemHandler =()=>{
            const requestData ={
                Id:this.props.Id,
                Name:this.props.Name,
                Price:this.props.Price,
                Qnt:1
            }
            this.props.AddDataToCart(requestData);
        }
    
        const removeItemHandler =()=>{
            this.props.RemoveDataFromCart(this.props.Id);
        }
        return(
            <li className={classes['cart-item']}>
                <div>
                    <h2>{this.props.Name}</h2>
                    <div className={classes.summary}>
                        <span className={classes.price}>{this.props.Price}</span>
                        <span className={classes.amount}> x {this.props.Qnt}</span>
                    </div>
                </div>
                <div className={classes.actions}>
                    <button onClick={addItemHandler}>+</button>
                    <button onClick={removeItemHandler}>-</button>
                </div>
            </li>
        )
    }
}

const mapDispatchToProps =(dispatch)=>{
    return bindActionCreators({AddDataToCart, RemoveDataFromCart}, dispatch);
}
export default connect(null, mapDispatchToProps)(CartItem);