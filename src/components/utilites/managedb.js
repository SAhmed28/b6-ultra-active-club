// use local storage to manage cart data
const addToDb = value =>{
    let key = 'mins'
    let shoppingCart = {};
    shoppingCart[key] = value;

    localStorage.setItem('cart', JSON.stringify(shoppingCart));
}


const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


export {
    addToDb, 
    getStoredCart,
}