import React from "react";
import { trimToLength } from "../../shared/utils/stringUtils";
import { CartProps } from "./Cart.props";
import { CartContainer, CartContent, CartDescription, CartItemDescription, CartItemTitle, CartTitle, Delimiter, Summary } from "./Cart.styled";

const Cart = ({ orderInfo, description, items, total, currency }: CartProps) => {
    return (
        <CartContainer>
            <CartContent>
                <CartTitle>{trimToLength(orderInfo, 100)}</CartTitle>
                <CartDescription>{trimToLength(description, 300)}</CartDescription>
                {items.map((x, id) => (
                    <React.Fragment key={id}>
                        <Delimiter />
                        <CartItemTitle>{x.title}</CartItemTitle>
                        <CartItemDescription>{x.description}</CartItemDescription>
                    </React.Fragment>
                ))}
                <Delimiter />
                <Summary>
                    {total} {currency} / month
                </Summary>
            </CartContent>
        </CartContainer>
    );
};

export default Cart;
