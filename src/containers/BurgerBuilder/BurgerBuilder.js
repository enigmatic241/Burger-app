import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-order';

const INGREDIENT_PRICES = {
    salad:5,
    cheese:5,
    meat:10,
    bacon:15
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state ={...}
    // }

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0
        },
        totalPrice : 10,
        purchasable:false,
        purchasing:false
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum , el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }


addIngredientHandler =(type) =>{
        const oldCount = this.state.ingredients[type]; 
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);

    }
removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]; 
    if(oldCount<=0){
        return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
}

purchaseHandler = () => {
    this.setState({purchasing:true});
}

purchaseCancelHandler = () =>  {
    this.setState({purchasing:false});
}

purchaseContinueHandler = () => {
    //alert('you can continue');
    const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer : {
            name: 'Mrigank',
            address: {
                street : 'veer kunwar singh colony',
                zipCode: '844101',
                country: 'Germany'
            },
            email: 'raviranjan241@gmail.com'
        },
        deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => console.log(response))
    .catch(error => console.log(error)); 

}

render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key]=disabledInfo[key]<= 0
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                        <OrderSummary ingredients={this.state.ingredients} Totalprice={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>

                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}
                ordered={this.purchaseHandler}/>
            </Aux>
            
        );
    }
};
export default BurgerBuilder;
 