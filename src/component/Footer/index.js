import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className='container'>
        <ul className={styles.footerList}>
          <li className={styles.footerItem}>
            Copyright © 2022. All Rights Reserved by BSCPad
          </li>
          <li className={styles.footerItem}>v1.3.3</li>
          <li className={styles.footerItem}>
            <a
              className={styles.footerLink}
              target='_blank'
              href='https://bscpad.com/privacy-policy'
            >
              Privacy Policy
            </a>
            <a
              className={styles.footerLink}
              target='_blank'
              href='https://bscpad.com/terms-of-use'
            >
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
