import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: JSON.parse(localStorage.getItem("stark-market")) || []
}

const heartSlice = createSlice({
    name: "heart",
    initialState,
    reducers:{
        addToHeart: (state, action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            if(index<0){
                state.value = [...state.value, {...action.payload, quantity:1}]
                localStorage.setItem("stark-market", JSON.stringify(state.value))

            } else{
                state.value = state.value.map((item, inx) => inx === index ? {...item, quantity: item.quantity +1} : item)
            }
        },
        removeFromHeart: (state, action)=>{
            state.value = state.value.filter(i => i.id !== action.payload.id)
        },
        decrementHeart: (state, action)=>{
            let index = state.value.findIndex(i => i.id === action.payload.id)
            state.value = state.value.map((item, inx) => inx === index ? {...item, quantity: item.quantity - 1} : item)
        }
    }
})

export const {addToHeart,removeFromHeart,decrementHeart} = heartSlice.actions
export default heartSlice.reducer