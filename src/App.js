import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setDarkMode } from './redux/actions';
import { setProjects } from '../src/redux/actions';

import Header from './component/Header';
import ScreenRoot from './screen/ScreenRoot';
import Footer from './component/Footer';

function App() {
  const dispatch = useDispatch();
  const projects = useMemo(() => {
    return [
      {
        id: 1,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-01.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 2,
        name: 'World of Defish (Blue Diamond Private)',
        avatarUrl: '/img/projects/project-02.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 3,
        name: 'Katana Inu',
        avatarUrl: '/img/projects/project-03.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 4,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-04.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 5,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-05.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 6,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-06.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 7,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-07.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 8,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-08.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 9,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-09.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 10,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-01.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 11,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-01.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 12,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-01.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: false,
        openTime: '2022-01-14 08:00:00',
        closedTime: '2022-01-14 08:00:00',
        totalSupply: 20000239,
        tokenSymbol: 'MNFT',
      },
      {
        id: 100,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-01.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: true,
      },
      {
        id: 101,
        name: 'CrypCade',
        avatarUrl: '/img/projects/project-01.jpg',
        desc: 'Functional Fullstack Open Entertainment Metaverse on BlockchainPowered by MYRA AI.',
        participants: 1000,
        percents: 100,
        allocation: '300006.4960/ 300000',
        swaprate: '1 BUSH  = 200 WWY',
        cap: 300000,
        access: 'Private',
        statusIsOpen: true,
      },
    ];
  }, []);

  useEffect(() => {
    dispatch(setProjects(projects));
  }, []);
  useEffect(() => {
    const html = document.querySelector('html');

    const IsDarkMode = localStorage.getItem('isDarkMode');
    if (!IsDarkMode) {
      html.classList.add('dark-mode');
      dispatch(setDarkMode(true));
    } else {
      html.classList.remove('dark-mode');
      dispatch(setDarkMode(false));
    }
  }, []);
  return (
    <div className='App'>
      <Header />
      <ScreenRoot />
      <Footer />
    </div>
  );
}

export default App;
