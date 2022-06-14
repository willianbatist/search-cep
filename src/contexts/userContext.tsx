import AuthProps from '../interfaces/AuthProps';
import { createContext, useState } from 'react';
import contextType from '../types/contextType';

const initialValue = {
  isOpenCep: false,
}

export const UserContext = createContext(initialValue);

export const UserContextProvider = ({ children }: AuthProps) => {
  const [isOpenCep, setIsOpenCep] = useState(initialValue.isOpenCep);

  const context:contextType = {
    isOpenCep, setIsOpenCep 
  }
  return (<UserContext.Provider value={ context }>{ children }</UserContext.Provider>);
}