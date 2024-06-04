import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order } from '../../pages/Home'

type CartState = {
    items: Order[]
}

const initialState: CartState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Order>) => {
            state.items.push(action.payload)
        }
    }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
