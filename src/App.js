import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Fruits Market</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <ProductList />
                </div>
                <div className="col-md-4">
                    <Cart />
                </div>
            </div>

            <footer>
                <h1>How React Works?</h1>
                <h3>React is a JavaScript library that creates user interfaces in a predictable and efficient way using declarative code. I can use it to help build single page applications and mobile apps.</h3>

                <h1>How useState Works?</h1>
                <h3>useState is a Hook that allows to state variables in functional components. I can pass the initial state to this function and it returns a variable with the current state value and another function to update this value.</h3>

            </footer>
        </div>
    );
}

export default App;
