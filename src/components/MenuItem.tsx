import { OrderAction } from "../reducers/propinaReducer";
import type {  MenuItem } from "../types";

type MenuItemProps = {
  item: MenuItem,
  dispatch: React.Dispatch<OrderAction>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
      <button 
        className=' border-2 border-teal-400 hover:bg-teal-200 p-3 text-lg  rounded-lg flex justify-between w-full'
        onClick={() => dispatch({type:'addItem',payload:{item:item}})}
      > 
          <p>{item.name}</p> 
          <p className='font-black'>${item.price}</p>
      </button>
  )
}
