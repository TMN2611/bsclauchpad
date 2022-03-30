import React from 'react';
import style from './Button.module.css';
import clsx from 'clsx';

export default function Button({
  href,
  title,
  primary,
  pancake,
  success,
  mexc,
  gateio,
  outlinePrimary,
  iconName,
  circle,
  small,
  large,
  disabled,
}) {
  let Component = 'button';

  if (href) {
    Component = 'a';
  }

  return (
    <Component
      href={href}
      target='_blank'
      className={clsx({
        [style.btnPrimary]: primary,
        [style.btnOutlinePrimary]: outlinePrimary,
        [style.btnCircle]: circle,
        [style.btnSmall]: small,
        [style.btnLarge]: large,
        [style.btnPancake]: pancake,
        [style.btnSuccess]: success,
        [style.btnMexc]: mexc,
        [style.btnGateio]: gateio,
        [style.btnDisabled]: disabled,
      })}
    >
      <i className={clsx([iconName, style.btnIcon])}></i>
      {title}
    </Component>
  );
}
