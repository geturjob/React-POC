import React, { Component, Fragment } from 'react';
import classes from './Header.module.css';
import foodImage from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import { NavLink } from 'react-router-dom';
import Theme from './Theme';
import Profile from './Profile';
import Cart from '../Cart/Cart.js';
import Model from '../UI/Model/Model';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            showCartBackdrop : false,
        }

        this.handleCartBackDropState = this.handleCartBackDropState.bind(this);
    }

    handleCartBackDropState(){
        this.setState({showCartBackdrop: !this.state.showCartBackdrop})
    }
    render() {
        return (
            <Fragment>
                <div className={classes.header}>
                    <NavLink to="/" className={classes.headingText}><span>POC</span></NavLink>
                    <div className={classes.themeSelectionDiv}>
                        <Theme></Theme>
                    </div>
                    <div className={classes.cartbutton}>
                        <HeaderCartButton enableBackdrop={this.handleCartBackDropState}></HeaderCartButton>
                    </div>
                    <Profile></Profile>
                </div>
                <div className={classes['main-image']}>
                    <img src={foodImage} alt="A food table"/>
                </div>
                {this.state.showCartBackdrop && <Model onClose={this.handleCartBackDropState}><Cart onClose={this.handleCartBackDropState}></Cart></Model>}
            </Fragment>
        )
    }
}
