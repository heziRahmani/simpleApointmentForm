
import { BiCheck} from 'react-icons/all';




export const DropDown=({ orderBy, onChengeOrder,sortBy,onChengeSort})=>
{
    return (
        <div className="origin-top-right absolute right-0 mt-2 w-56
          rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <div 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer" onClick={()=>onChengeSort("petName")}
              role="menuitem">Pet Name{(sortBy=="petName")?<BiCheck />:""}</div>
            <div 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"  onClick={()=>onChengeSort("ownerName")}
              role="menuitem">Owner Name {(sortBy=="ownerName")?<BiCheck />:""}</div>
            <div 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer" onClick={()=>onChengeSort("aptNotes")}
              role="menuitem">Date {(sortBy=="aptNotes")?<BiCheck />:""}</div>
            <div 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2" onClick={()=>onChengeOrder("asc")}
              role="menuitem">Asc {(orderBy=="asc")?<BiCheck />:""}</div>
            <div 
              className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer" onClick={()=>onChengeOrder("desc")}
              role="menuitem">Desc {(orderBy=="desc")?<BiCheck />:""}</div>
          </div>
        </div>
      )
}