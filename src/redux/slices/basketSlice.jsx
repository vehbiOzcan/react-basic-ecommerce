import { createSlice } from "@reduxjs/toolkit"

const getBasketFromStorage = () => {
    if (localStorage.getItem('basket'))
        return JSON.parse(localStorage.getItem('basket'));
    return [];
}

const initialState = {
    basketProducts: getBasketFromStorage(),
    basketDrawer: false,
    totalAmount: 0,
}

const writeFromBasketToStorage = (basket) => {
    localStorage.setItem('basket', JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            console.log(action.payload)
            const findProduct = state.basketProducts && state.basketProducts.find((product) => product.id === action.payload.id)

            if (findProduct) {
                //Aynı ürün varsa önce listeden o ürünü çıkarıyoruz sonra sayısını güncelliyoruz ve tekrar state içine ekliyoruz
                const extractProduct = state.basketProducts.filter((product) => product.id != action.payload.id)
                findProduct.count += action.payload.count;
                state.basketProducts = [...extractProduct, findProduct];
                writeFromBasketToStorage(state.basketProducts);
            } else {
                state.basketProducts = [...state.basketProducts, action.payload];
                writeFromBasketToStorage(state.basketProducts);
            }
        },

        deleteToBasket: (state, action) => {
            const deletedProductList = state.basketProducts.filter((product) => product.id != action.payload);
            console.log(deletedProductList)
            state.basketProducts = [...deletedProductList];
            writeFromBasketToStorage(state.basketProducts);
        },

        setBasketDrawer: (state) => {
            state.basketDrawer = !state.basketDrawer;
        },

        calculateBasket: (state) => {
            state.totalAmount = 0;
            state.basketProducts && state.basketProducts.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        }

    }
})

export const { addToBasket, setBasketDrawer, calculateBasket, deleteToBasket } = basketSlice.actions
export default basketSlice.reducer