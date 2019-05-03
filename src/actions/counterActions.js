import { INCREMENT, DECREMENT } from "../constants/general";

export const onIncrement = () => ({
  type: INCREMENT
})
export const onDecrement = () => ({
  type: DECREMENT
})