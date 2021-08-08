import classes from './EditDetails.module.css';
import Model from '../UI/Model/Model';
import Input from '../UI/Input.js';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { UpdateOrderDetails } from '../../Actions/ManageOrders';

const EditDetails = (props) => {
    const orderForEdit = useSelector(state => state.EditOrder);
    const dispatch = useDispatch();

    console.log(orderForEdit);
    const firstNameErrorMsg = "FirstName should be atleast 3 character long";
    const lastNameErrorMsg = "LastName should be atleast 3 character long";
    const emailErrorMsg = "Enter valid email";

    const [firstName, setfirstName] = useState(orderForEdit.name);
    const [lastName, setlastName] = useState(orderForEdit.lastname);
    const [address, setaddress] = useState(orderForEdit.address);


    const handleFirstName = (value) => {
        setfirstName(value);
    }

    const handleLastName = (value) => {
        setlastName(value)
    }

    const handleAddress = (value) => {
        setaddress(value)
    }

    const saveEditDetails=()=>{
        if(firstName != '' && lastName != '' && address != '')
        {
            const requestData ={
                id:orderForEdit.id,
                name:firstName,
                lastname:lastName,
                address:address
            }
            dispatch(UpdateOrderDetails(requestData))
            props.onClose()
        }
        
    }
    return (
            <div className={classes.editFormContainer}>
                <Input label="FirstName"
                    inputHandler={handleFirstName}
                    // inValid={firstNameError}
                    // errorMsg={firstNameErrorMsg}
                    // showBump={showBump}
                    input={
                        {
                            type: 'text',
                            id: 'firstname',
                            value: firstName
                        }
                    }></Input>
                <Input label="LastName"
                    inputHandler={handleLastName}
                    // inValid={firstNameError}
                    // errorMsg={lastNameErrorMsg}
                    // showBump={showBump}
                    input={
                        {
                            type: 'text',
                            id: 'lastName',
                            value: lastName
                        }
                    }></Input>
                <Input label="Addess"
                    inputHandler={handleAddress}
                    // inValid={firstNameError}
                    // errorMsg={firstNameErrorMsg}
                    // showBump={showBump}
                    input={
                        {
                            type: 'text',
                            id: 'address',
                            value: address
                        }
                    }></Input>
                <div className={classes.actions}>
                    <button className={classes['button-cancel']} onClick={props.onClose}>Cancel</button>
                    {Object.keys(orderForEdit).length > 0 && <button className={classes.button} onClick={saveEditDetails}>Save</button>}
                </div>
            </div>
    )
}

export default EditDetails;