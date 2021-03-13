import React from 'react'
import HomeScreen from './screen/HomeScreen';
import { StoreProvider } from "./store";

export default function App() {
  return (
    <StoreProvider>
      <HomeScreen/>
    </StoreProvider>
  )
}
