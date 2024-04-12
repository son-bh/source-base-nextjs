# Timepay App

A Source base built with NextJS, Zustand, Tailwind CSS.

## Stack

### FE

- nextjs
- axios
- zustand

### CSS Framework

- Tailwind CSS

### Tools

- eslint
- prettier
- lint-staged

## Installation

```bash
# install node version
Please install at least v18.17.1 version node

# install npm version
Please install at least v9.6.7 version node
```

```bash
# install app's depndencie
$ yarn
```

## Scripts

```bash
# dev server with PORT 3000 at http://localhost:3000/
$ yarn dev

# run `lint:js` to tell you what is wrong code.
$ yarn lint:js
```

# Convention code

## Component's file name should be in Pascal Case.

Component names should be like ProductCard and not like productCard, product-card, etc. This way when we see a filename in Pascal Case, it is immediately clear that the file is a react component.

## Component having own folders should have a component file with the same name.

This way when we search for files, we don't get a list of <b>index.ts</b> but will receive the actual component files.

## Create an index.ts file in that component folder which export the named component.

```
import Product from './Product';
export default Product;
```

or

```
export { default } from './Product';
```
