import { PropsWithChildren, createContext,useState} from "react";


// export interface ContextTypes {
//   prodcutId : number;
//   setProductId :  Dispatch<SetStateAction<number>>;
//   sideBarActive : boolean;
//   setSideBarActive :  Dispatch<SetStateAction<boolean>>;
//   popupActive : boolean;
//   setPopupActive :  Dispatch<SetStateAction<boolean>>;
// }

export const Context = createContext(null);


export const ContextFunction = ({children}) => {

  const [prodcutId,setProductId] = useState(0);
  const [sideBarActive,setSideBarActive] = useState(false);
  const [popupActive,setPopupActive] = useState(false);

  return (
  <Context.Provider value={{prodcutId, setProductId, popupActive, setPopupActive, sideBarActive, setSideBarActive}}>
    {children}
  </Context.Provider>)
}