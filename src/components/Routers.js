import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import BootstrapDialogTitle from './BootstrapDialogTitle';
import Add from './add';
import Scores from './Scores';
import Edit from './Edit';
import CustomizedDialogs from './BootstrapDialogTitle';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<BootstrapDialogTitle />} />
      <Route path="/Profile" element={<Home />} />
      <Route path="/Add" element={<Add />} />
      <Route path="/View" element={<Scores />} />
      <Route path="/Edit" element={<Edit />} />
      <Route path="/Signup" element={<CustomizedDialogs />} />
    </Routes>
  );
};

export default Routers;