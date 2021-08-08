import { Fragment } from "react";
import ReactDom from 'react-dom';
import classes from './Model.module.css';

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const Overlays=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays');
const Model =(props)=>{
    return(
        <Fragment>
            {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {ReactDom.createPortal(<Overlays>{props.children}</Overlays>, portalElement)}
        </Fragment>
    )
}

export default Model;