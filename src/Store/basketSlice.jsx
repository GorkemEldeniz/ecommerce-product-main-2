import { createSlice } from '@reduxjs/toolkit'
import {useSelector} from "react-redux";

// interface Item {
//   id:number;
//   name:string;
//   price:number;
//   number:number;
//   imgUrl:string;
// }

const initialState = {
    id : 1 ,
    name : "Fall Limited Edition Sneakers",
    price : 125,
    number : 0,
    imgUrl:"../images/image-product-1-thumbnail.jpg"
  }


export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    incrementByAmount:(state,action) => {
      state.number = action.payload
    },
    decrementAll : (state) => {
      state.number = 0;
    }
  },
})

// Action creators are generated for each case reducer function
export const {incrementByAmount, decrementAll } = basketSlice.actions

export default basketSlice.reducer