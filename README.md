# Payment interface

Adaptive payment page </br> https://payment-interface-ochre.vercel.app/

## Launch

```
yarn install
yarn dev
```

## Description

Payment with a card number that ends with "5" will result in a failure; all others will be successful. Only valid due to Luhn algorithm numbers would be accepted.
Example failure cards:
`6200000000000005`
`3566002020360505`
`378282246310005`
Example success cards:
`4242424242424242`
`4000056655665556`
`2223003122003222`

## Technologies

-   styled-components
-   Tanstack Forms
-   Framer Motion
-   Floating UI
-   react-toastify
-   zod
