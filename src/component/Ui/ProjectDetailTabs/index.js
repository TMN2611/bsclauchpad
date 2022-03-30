import { useEffect } from 'react';
import TableInfo from '../../Ui/ProjectDetailTableInfo';
import TableSchedule from '../../Ui/ProjectDetailTableSchedule';
import AllocationTable from '../../Ui/ProjectDetailTableAllocation';
import './tabs.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '../Button';

export default function BasicTabs({ values }) {
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

  const tableValue = values;
  let tablePoolInfo = [];
  let tableTokenInfo = [];
  let tableSchedule = [];
  const tablePoolKey = [
    'openTime',
    'closedTime',
    'cap',
    'swaprate',
    'access',
    'allocation',
  ];
  const tableTokenKey = ['name', 'totalSupply', 'tokenSymbol'];
  const tableScheduleKey = ['openTime', 'closedTime', 'tokenSymbol'];

  for (const key in tableValue) {
    if (tablePoolKey.includes(key)) {
      tablePoolInfo.push({
        name: key.toUpperCase(),
        calories: tableValue[key],
      });
    }
  }
  for (const key in tableValue) {
    if (tableTokenKey.includes(key)) {
      tableTokenInfo.push({
        name: key.toUpperCase(),
        calories: tableValue[key],
      });
    }
  }
  for (const key in tableValue) {
    if (tableScheduleKey.includes(key)) {
      tableSchedule.push({
        calories: tableValue[key],
      });
    }
  }

  function createData(name, calories) {
    return { name, calories };
  }

  const poolInfo = [
    createData('Frozen yoghurt', 159),
    createData('Ice cream sandwich', 237),
    createData('Eclair', 262),
    createData('Cupcake', 305),
    createData('Gingerbread', 356),
  ];

  return (
    <div>
      <div className='tabs'>
        <div className='tab__item active'>Project details</div>
        <div className='tab__item'>Schedule</div>
        <div className='tab__item'>Your Allocation</div>

        <div className='line' />
      </div>
      <div className='contents'>
        <div className='tab__content active'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TableInfo
                tableTitle='Pool information'
                tableData={tablePoolInfo}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TableInfo
                tableTitle='Token information'
                tableData={tableTokenInfo}
              />
            </Grid>
          </Grid>
        </div>
        <div className='tab__content'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TableInfo
                tableTitle='Token information'
                tableData={tableTokenInfo}
              />
            </Grid>
          </Grid>
        </div>
        <div className='tab__content'>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <AllocationTable
                tableTitle='Token information'
                // tableData={tableTokenInfo}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Button
                title={'Add token to MetaMask'}
                iconName='fa-solid fa-plus'
                primary
                small
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
