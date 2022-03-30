import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { setDarkMode } from '../../redux/actions';
import styles from './Header.module.css';
import Button from '../Ui/Button';
import SmallModal from '../Ui/SmallModal';

export default function Header() {
  const dispatch = useDispatch();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleToggleTheme = useCallback(() => {
    console.log('haha');
    const html = document.querySelector('html');
    if (!isDarkMode) {
      setIsDarkMode(true);

      html.classList.add('dark-mode');
      dispatch(setDarkMode(true));

      localStorage.setItem('isDarkMode', true);
    } else {
      setIsDarkMode(false);
      dispatch(setDarkMode(false));
      html.classList.remove('dark-mode');

      localStorage.removeItem('isDarkMode');
    }
  }, [isDarkMode]);

  const [isSmallModalOpen, setSmallModalOpen] = React.useState(false);
  const navList = useRef();

  const handleOpenSmallModal = () => setSmallModalOpen(true);
  const handleCloseSmallModal = () => setSmallModalOpen(false);

  const [isNavHidden, setNavHidden] = useState(true);
  const handleToggleNav = () => {
    setNavHidden(!isNavHidden);
  };
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;

    if (width <= 768) {
      setNavHidden(false);
    } else {
      setNavHidden(true);
    }

    window.onresize = () => {
      if (window.innerWidth <= 768) {
        setNavHidden(false);
      } else {
        setNavHidden(true);
      }
    };
    console.log(width);
  }, []);
  return (
    <header className={clsx([styles.header, 'py-3'])}>
      <div className='container'>
        <div className={styles.headerWrapper}>
          <div className={styles.navWrapper}>
            <Link to='/' className={styles.navBranch}>
              <img
                className={styles.navBranchLogo}
                src='./img/logo.png'
                alt=''
              />
              BSCPad
            </Link>
            <button
              className={styles.navMobileToggle}
              onClick={handleToggleNav}
            >
              <i
                className={clsx('fa-solid fa-bars', styles.navMobileToggleIcon)}
              ></i>
            </button>
          </div>
          {isNavHidden ? (
            <nav className={styles.nav}>
              {/* Mobile toggle btn */}

              <ul ref={navList} className={styles.navList}>
                <li className='nav-item' onClick={() => handleOpenSmallModal()}>
                  <Button
                    title='Connect Wallet'
                    primary
                    small
                    iconName='fa-solid fa-wallet'
                  />
                </li>
                <li className='nav-item'>
                  <Link to='/projects'>
                    <Button
                      title='Project'
                      outlinePrimary
                      primary
                      small
                      iconName='fa-solid fa-fire-flame-curved'
                    />
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/staking'>
                    <Button
                      title='Staking'
                      outlinePrimary
                      primary
                      small
                      iconName='fa-solid fa-dragon'
                    />
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/calendar'>
                    <Button
                      // title='Connect Wallet'
                      circle
                      primary
                      outlinePrimary
                      iconName='fa-solid fa-calendar-days'
                    />
                  </Link>
                </li>
                <li className='nav-item' onClick={handleToggleTheme}>
                  <Button
                    circle
                    primary
                    outlinePrimary
                    iconName='fa-solid fa-lightbulb'
                  />
                </li>
              </ul>
            </nav>
          ) : (
            ''
          )}
        </div>
      </div>
      <SmallModal
        isSmallModalOpen={isSmallModalOpen}
        onOpenSmallModal={handleOpenSmallModal}
        onCloseSmallModal={handleCloseSmallModal}
      />
    </header>
  );
}
