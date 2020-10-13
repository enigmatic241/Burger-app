import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

const ingredientSummary = Object.keys(props.ingredients)
.map(igKey =>{
return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
});

    return(
        <Aux>
            <h3>Your Order</h3>
                <p>A Delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
               <span><b>Price Payable</b>: {props.Totalprice}</span>
            </ul>
            <p>Continue to check out</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled} style={{color:"red"}}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>

        </Aux>
    );

};

export default orderSummary;