import React from 'react';
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import history from '../FoodApp/Service/RouteHistory.js'

import Header from '../FoodApp/Components/LayOuts/Header.js';
import Meals from '../FoodApp/Components/Meals/Meals.js';
import AddressForm from '../FoodApp/Components/Address/AddressForm.js';
import SuccessMsg from '../FoodApp/Components/UI/SuccessMsg/SuccessMsg.js';
import CustomTheme from '../FoodApp/Components/CustomTheme/customTheme.js';
import OrderDetails from '../FoodApp/Components/OrderDetails/OrderDetails.js';
import Footer from '../FoodApp/Components/UI/Footer/footer.js';

class AppRouting extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Header></Header>
                <Switch>
                    <Route exact path="/" render={()=><Redirect to="/dashboard"></Redirect>}></Route>
                    <Route path="/dashboard" component={Meals}></Route>
                    <Route path="/checkout" component={AddressForm}></Route>
                    <Route path="/success" component={SuccessMsg}></Route>
                    <Route path="/customTheme" component={CustomTheme}></Route>
                    <Route path="/orderdetails" render={()=><OrderDetails></OrderDetails>}></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        );
    }
}

export default AppRouting;