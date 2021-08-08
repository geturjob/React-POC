import { useDispatch } from 'react-redux';
import MealsForm from '../MealsAddForm/MealsForm';
import classes from './MealItem.module.css';
import { AddDataToCart } from '../../../Actions/ManageCart';

const MealItem =({id, name, price, description})=>{
    const dispatch = useDispatch();
    const formatedPrice = `Rs ${price}`;

    const saveItemsToCart=(quantity)=>{
        const requestData ={
            Id:id,
            Name:name,
            Price:price,
            Des:description,
            Qnt:quantity
        }

        dispatch(AddDataToCart(requestData));
    }
    return(
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{formatedPrice}</div>
            </div>
            <div>
                <MealsForm id={id} saveItemsToCart={saveItemsToCart}></MealsForm>
            </div>
        </li>
    );
}

export default MealItem;