# Mundi

This is an app exercise for Mundi.

## Enunciado

Implemente un frontend que cumpla con los siguientes requerimientos de negocio:

1. Permite listar agentes de carga filtrando en base al país/ciudad de partida y de llegada,
   los tipo de transporte (air, sea, road, rail), y la volumetría (metros cúbicos, CBM) de la
   carga.
2. Detalle para cada agente de carga, el tipo de transporte, ruta, precio, país/ciudad de
   partida y llegada, tiempo en tránsito, reviews (stars), etc.

## Solution Description

I chosed Typescript to create this app.

- The main `pro` for me is: typed props makes easier to debug code, also is almost impossible to submit faulty code as react js crashes when something is not typed or the type of the variable is incorrect.
- The `con` is pretty clear if you already checked the code: it takes some more code to create the same app with vanilla ES6.

This is a personal choice, but once you get used to typescript, there's no going back. Having larger development times happens only a the beginning. Later it becames very predictable and almost 0% prone to errors.

## How to Execute

- git clone git@github.com:diegoalmesp/freighters-app.git (or https://github.com/diegoalmesp/freighters-app.git if not using SSH).

- cd freigters-app

- Rename (or copy and paste with diferent name) the `default.env` file to `.env` as it contains the pexel auth token.

if using yarn:

- yarn install

- yarn start

- yarn run test

## Challenges Faced

This is actually the second app I bootstrap, from 0, using typescript, and the first one with typscript + redux. It took a little try and error, but once the setup is complete, the rest gets easier to implement.

## Tech used in this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Additionally, I also used:

- styled-components - for css

- https://github.com/country-regions/react-country-region-selector - custom select to get countries and regions to be used in forms.

- formik - recommended by react js as it has a small footprint in code and is very streightforward to implement.

- pexels - small library to add photos, used on the modal

- react-modal - simple & straightforward modal for react js and fast implementation.

- react-redux + reduxjs/toolkit - this is clearly an overkill for such a simple app, but it's widely used and either this and/or graphql are needed for scalable apps, as react js is not suitable for data management. We could argue about the use of Context instead, but I think is made for simple stuff and not meant to be used as 2 way data handling. But I have used Context like that before, this is my favorite post about it from Kent C. Dodds (also creator of react-testing-library used here): https://kentcdodds.com/blog/how-to-use-react-context-effectively. reduxjs/toolkit allows to implement redux with less code than vanilla react-redux.

- jest + react-testing-library (my favorite for testing, the principle is: test the result, not the implementation)

- react-star-rating-component - simple library to display ratings. I picked this one because you can easily install the types as another npm package.

- cypress implemented with typescript for intellisense

### Missing

If I had more time to work on this app I would:

- separate the form selectors in different small reusable components (all of them share a label, name and data-testid props which could be passed as props)

- increase test coverage

- add cypress to test the interaction between the SearchForm and the FreightersList interaction. And also the interaction of the last one with FreighterDetails composite.

- use an API

- have a better understanding of what's a normal cbm value =)
