import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import ScrContainer from './screens/scrContainer'

export default function App() {
  return (
    <BrowserRouter>
      <ScrContainer />
    </BrowserRouter>
  );
}