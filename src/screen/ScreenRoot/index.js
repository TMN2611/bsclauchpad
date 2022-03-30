import { Routes, Route } from 'react-router-dom';

import HomePage from '../HomePage';
import ProjectsPage from '../ProjectsPage';
import StakingPage from '../StakingPage';
import CalendarPage from '../CalendarPage';
import DetailProject from '../DetailProject';

import React from 'react';

export default function ScreenRoot() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path={'/projects/:projectId'} element={<DetailProject />} />
      <Route path='/staking' element={<StakingPage />} />
      <Route path='/calendar' element={<CalendarPage />} />
    </Routes>
  );
}
