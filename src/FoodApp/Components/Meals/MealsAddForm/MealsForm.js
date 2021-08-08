import classes from './MealsForm.module.css';
import Input from '../../UI/Input.js'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddDataToCart } from '../../../Actions/ManageCart.js';

const MealsForm = (props) => {
    const [quantity, setQuantity] = useState(1);
    const [inputError, setinputError] = useState(false);
    const [showBump, setshowBump] = useState(false);
    const inputErrorMsg = "Quantity Should be between 1 and 5";

    const inputHandler = (inputData) => {
        if (inputData == "" || inputData > 5 || inputData < 1) {
            setinputError(true);
        }
        else {
            setinputError(false);
            setQuantity(inputData);
        }
    }

    const addButtonHandler = (e) => {
        e.preventDefault();
        if (inputError) {
            setshowBump(true);

            setTimeout(() => {
                setshowBump(false);
            }, 300);
        }
        else {
            props.saveItemsToCart(+quantity);
        }
    }

    return (
        <form className={classes.form}>
            <Input label="Quantity"
                inputHandler={inputHandler}
                inValid={inputError}
                showBump={showBump}
                errorMsg={inputErrorMsg}
                input={{
                    min: '1',
                    max: '5',
                    defaultValue: '1',
                    id: 'quantity' + props.id,
                    step: '1',
                    type: 'number'
                }}></Input>
            <button onClick={addButtonHandler}>+Add</button>
        </form>
    );
}

export default MealsForm;