import { useEffect, useState } from 'react';

import './staking.css';
import ButtonComponent from '../../component/Ui/Button';

import StakeContentComponent from './StakeContentComponent';
import UnStakeContentComponent from './UnStakeContentComponent';
import WithDrawStakeContentComponent from './WithDrawStakeContentComponent';

export default function Staking() {
  useEffect(() => {
    var items = document.querySelectorAll('.tab__item');
    var contents = document.querySelectorAll('.tab__content');

    var line = document.querySelector('.line');

    items.forEach(function (tab, index) {
      var content = contents[index];
      tab.onclick = function (e) {
        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';

        document.querySelector('.tab__item.active').classList.remove('active');
        document
          .querySelector('.tab__content.active')
          .classList.remove('active');

        tab.classList.add('active');
        content.classList.add('active');
      };
    });
  }, []);
  return (
    <div className='staking'>
      <div className='staking-content'>
        <div className='tabs-wrapper'>
          <div className='tabs'>
            <div className='tab__item active'>Stake</div>
            <div className='tab__item'>Unstake</div>
            <div className='tab__item'>Withdraw</div>

            <div className='line' />
          </div>
          <div className='staking-card-list'>
            <div className='staking-card-item'>
              <h2 className='staking-card-title'>Number of Stakers</h2>
              <p className='staking-card-body'>11319</p>
            </div>
            <div className='staking-card-item'>
              <h2 className='staking-card-title'>Total BSCPAD Staked</h2>
              <p className='staking-card-body'>85947249.58</p>
            </div>
            <div className='staking-card-item'>
              <h2 className='staking-card-title'>APY</h2>
              <p className='staking-card-body'>15.00 %</p>
            </div>
          </div>
        </div>

        <div className='contents'>
          <div className='tab__content active'>
            <div className='staking-tab-content'>
              <h2 className='staking-tab-content-heading'>Stake your BSCPAD</h2>
              <StakeContentComponent />
            </div>
          </div>
          <div className='tab__content'>
            <h2 className='staking-tab-content-heading'>
              Unstake your BSCSPAD
            </h2>
            <UnStakeContentComponent />
          </div>
          <div className='tab__content'>
            <h2 className='staking-tab-content-heading'>
              Withdraw your BSCPAD
            </h2>

            <WithDrawStakeContentComponent />
          </div>
        </div>
      </div>
      <div className='staking-sidebar'>
        <ul className='staking-sidebar-cards'>
          <li className='staking-card-item'>
            <h2 className='staking-card-title'>Number of Stakers</h2>
            <p className='staking-sidebar-card-value'>0.0000</p>
          </li>
          <li className='staking-card-item'>
            <h2 className='staking-card-title'>Number of Stakers</h2>
            <p className='staking-sidebar-card-value'>0.0000</p>
          </li>
          <li className='staking-card-item'>
            <h2 className='staking-card-title'>Number of Stakers</h2>
            <p className='staking-sidebar-card-value'>0.0000</p>
            <div className='staking-card-btns'>
              <ButtonComponent primary title={'Stake'} />
              <ButtonComponent primary title={'Withdraw'} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
