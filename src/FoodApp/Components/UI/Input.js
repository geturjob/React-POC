import classes from './Input.module.css';
import { useState, useEffect } from 'react';

const Input = (props) => {
    const [doBump, setdoBump] = useState(false);
    useEffect(() => {
        if (props.showBump) {
            setdoBump(true);

        }

        const timer = setTimeout(() => {
            setdoBump(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [props.showBump])
    const handleInputChange = (e) => {
        const inputData = e.target.value;
        props.inputHandler(inputData);
    }
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <div className={classes.tooltip}>
                <input className={`${classes.inputField} ${props.input.invalid ? `${classes.error}` : ''}`} onChange={handleInputChange} {...props.input}></input>
                {props.inValid && <span className={`${classes.tooltiptext} ${doBump? `${classes.bump}` : ``}`}>{props.errorMsg}</span>}
            </div>
        </div>
    )
}

export default Input;