import { Restaurant, Pedido } from '../../pages/Home'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    items: Restaurant[]
    pedido: Pedido[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    pedido: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Pedido>) => {
            const p = state.pedido.find((pe) => pe.id === action.payload.id)
            if (!p) {
                state.pedido.push(action.payload)
            } else {
                alert('Pedido já está no carrinho')
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.pedido = state.pedido.filter((p) => p.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { addItem, removeItem, open, close } = cartSlice.actions
export default cartSlice.reducer
