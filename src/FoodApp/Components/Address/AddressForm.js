import Card from "../UI/Card.js";
import classes from './AddressForm.module.css';
import Input from "../UI/Input.js";
import { useState } from "react";
import history from "../../Service/RouteHistory.js";
import { useDispatch,useSelector } from "react-redux";
import { PlaceOrder, SaveUserAddress } from "../../Actions/ManageCart.js";

const AddressForm = () => {
    const dispatch = useDispatch();
    const items = useSelector(state=>state.Cart.cartItems);
    const address = useSelector(state=>state.Address.userAddress);
    const {firstName : Firstname, lastName:Lastname, email:Email, address1:Address1, city:City, state:State, zip:Zip} = address;

    const totalCartItems = items.reduce((count, data)=>{
        let amount = +data.Qnt;
        return  count + amount;
    }, 0);

    const totalBill = items.reduce((total, data)=>{
        const price = +data.Price;
        const qnt = data.Qnt;
        return total + price * qnt;
    }, 0);

    const [firstNameError, setfirstNameError] = useState(false);
    const [lastNameError, setlastNameError] = useState(false);
    const [emailError, setemailError] = useState(false);
    const [cityError, setcityError] = useState(false);
    const [stateError, setstateError] = useState(false);
    const [address1Error, setaddress1Error] = useState(false);
    const [zipError, setzipError] = useState(false);

    const [firstName, setfirstName] = useState(`${Firstname === undefined ? `` : `${Firstname}`}`);
    const [lastName, setlastName] = useState(`${Lastname === undefined ? `` : `${Lastname}`}`);
    const [email, setemail] = useState(`${Email === undefined ? `` : `${Email}`}`);
    const [city, setcity] = useState(`${City === undefined ? `` : `${City}`}`);
    const [state, setstate] = useState(`${State === undefined ? `` : `${State}`}`);
    const [address1, setaddress1] = useState(`${Address1 === undefined ? `` : `${Address1}`}`);
    const [zip, setzip] = useState(`${Zip === undefined ? `` : `${Zip}`}`);

    const [formValid, setFormValid] = useState(`${address.length == 0 ? `` : `${true}`}`);
    const [showBump, setShowBump] = useState(false);

    const firstNameErrorMsg = "FirstName should be atleast 3 character long";
    const lastNameErrorMsg = "LastName should be atleast 3 character long";
    const emailErrorMsg = "Enter valid email";
    const cityErrorMsg ="Enter Valid city name";
    const stateErrorMsg ="Enter Valid state name";
    const zipErrorMsg ="Zip code should be of length 5";
    const address1ErrorMsg="Enter valid address";

    const handleOrderClick=()=>{
        if(formValid ==='true' || formValid)
        {
            const addressData={
                firstName:firstName,
                lastName:lastName,
                email:email,
                address1:address1,
                state:state,
                city:city,
                zip:zip
            }
            dispatch(SaveUserAddress(addressData));
            history.push(`/success?totalBill=${totalBill}&totalCartItems=${totalCartItems}`);
            dispatch(PlaceOrder());
        }
        else{
            setShowBump(true);

            setTimeout(() => {
                setShowBump(false);
            }, 300);
        }
    }

    const handleSaveAddress=()=>{
        if(formValid)
        {
            const addressData={
                firstName:firstName,
                lastName:lastName,
                email:email,
                address1:address1,
                state:state,
                city:city,
                zip:zip
            }
            dispatch(SaveUserAddress(addressData));
        }
        else{
            setShowBump(true);

            setTimeout(() => {
                setShowBump(false);
            }, 300);
        }
    }

    const firstNameHandler = (value) => {
        if(value.length < 3)
        {
            setfirstNameError(true);
            setFormValid(false);
        }
        else{
            setfirstNameError(false);
            setFormValid(true);
        }
        setfirstName(value);
    }
    const lastNameHandler = (value) => {
        if(value.length < 3)
        {
            setlastNameError(true);
            setFormValid(false);
        }
        else{
            setlastNameError(false);
            setFormValid(true);
        }
        setlastName(value);
    }
    const emailHandler = (value) => {
        if(value.length < 7)
        {
            setemailError(true);
            setFormValid(false);
        }
        else{
            setemailError(false);
            setFormValid(true);
        }
        setemail(value);
    }
    const address1Handler = (value) => {
        if(value.length < 1)
        {
            setaddress1Error(true);
            setFormValid(false);
        }
        else{
            setaddress1Error(false);
            setFormValid(true);
        }
        setaddress1(value);
    }

    const cityHandler = (value) => {
        if(value.length < 3)
        {
            setcityError(true);
            setFormValid(false);
        }
        else{
            setcityError(false);
            setFormValid(true);
        }
        setcity(value);
    }

    const stateHandler = (value) => {
        if(value.length <3)
        {
            setstateError(true);
            setFormValid(false);
        }else{
            setstateError(false);
            setFormValid(true);
        }
        setstate(value);
    }

    const zipHandler=(value)=>{
        if(value.length != 6 )
        {
            setzipError(true);
            setFormValid(false);
        }
        else{
            setzipError(false);
            setFormValid(true);
        }
        setzip(value);
    }
    return (
        <div className={classes.addressSection}>
            <Card>
                <Input label="FirstName"
                    inputHandler={firstNameHandler}
                    inValid={firstNameError}
                    errorMsg={firstNameErrorMsg}
                    showBump={showBump}
                    input={
                        {
                            type: 'text',
                            id: 'firstname',
                            value : firstName
                        }
                    }></Input>
            </Card>
            <Card>
                <Input label="LastName"
                    inputHandler={lastNameHandler}
                    inValid={lastNameError}
                    errorMsg={lastNameErrorMsg}
                    showBump={showBump}
                    input={
                        {
                            type: 'text',
                            id: 'lastname',
                            value : lastName
                        }
                    }></Input>
            </Card>
            <Card>
                <Input label="Email"
                    inputHandler={emailHandler}
                    inValid={emailError}
                    errorMsg={emailErrorMsg}
                    showBump={showBump}
                    input={
                        {
                            type: 'email',
                            id: 'email',
                            value:email
                        }
                    }></Input>
            </Card>
            <Card>
                <h3>Address</h3>
                <Input label="H No., Village, Town"
                    inputHandler={address1Handler}
                    inValid={address1Error}
                    errorMsg={address1ErrorMsg}
                    showBump={showBump}
                    input={{
                        type: 'text',
                        value:address1,
                        id: 'address1'
                    }}></Input>
                <Input label="City"
                    inputHandler={cityHandler}
                    inValid={cityError}
                    errorMsg={cityErrorMsg}
                    showBump={showBump}
                    input={{
                        type: 'text',
                        value:city,
                        id: 'city'
                    }}></Input>
                <div className={classes.stateZip}>
                    <div className={classes.state}>
                        <Input label="State"
                            inputHandler={stateHandler}
                            inValid={stateError}
                            errorMsg={stateErrorMsg}
                            showBump={showBump}
                            input={{
                                type: 'text',
                                value:state,
                                id: 'state'
                            }}></Input>
                    </div>
                    <div className={classes.zipCode}>
                        <Input label="Zip Code"
                            inputHandler={zipHandler}
                            inValid={zipError}
                            errorMsg={zipErrorMsg}
                            showBump={showBump}
                            input={{
                                type: 'number',
                                value : zip,
                                id: 'zipcode'
                            }}></Input>
                    </div>
                </div>
            </Card>
            <Card>
                <button className={classes.button} onClick={handleSaveAddress}>Save Address</button>
                <button className={classes.button} onClick={handleOrderClick}>Place Order</button>
            </Card>
        </div>
    );
}

export default AddressForm;