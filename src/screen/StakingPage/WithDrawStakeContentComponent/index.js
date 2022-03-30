import { useEffect, useState } from 'react';
import ButtonComponent from '../../../component/Ui/Button';

import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PriorityHighOutlinedIcon from '@mui/icons-material/PriorityHighOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import clsx from 'clsx';
import { Box, Grid } from '@mui/material';
export default function WithDrawStakeContentComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [hadReadConditionCheck, setHadReadConditionCheck] = useState(false);

  const steps = ['Checkpoints', 'Initialize Withdrawal', 'Confirmation'];
  const CustomStepIcon = (props) => {
    const { active, completed } = props;

    const stepIcons = {
      1: <PriorityHighOutlinedIcon />,

      2: <AttachMoneyIcon />,

      3: <CheckIcon />,
    };

    return (
      <div
        className={clsx('stepIcon', { ['activeIcon']: active || completed })}
      >
        {stepIcons[String(props.icon)]}
      </div>
    );
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleCheckInCheckPoints = () => {
    console.log(hadReadConditionCheck);
    setHadReadConditionCheck(!hadReadConditionCheck);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            // labelProps.optional = (
            //   <Typography variant='caption'>Optional</Typography>
            // );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} StepIconComponent={CustomStepIcon}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button
          color='inherit'
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}

        <div onClick={handleNext}>
          <ButtonComponent
            primary
            small
            title={activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          ></ButtonComponent>
        </div>
      </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* step 1 */}
          {activeStep === 0 ? (
            <div className='step-content'>
              <div className='step-card step-checkpoints'>
                <h2>Checkpoints</h2>
                <p>The following conditions must be met to proceed</p>
                <ul className='step-checkpoints-list'>
                  <li className='step-checkpoints-item'>
                    <div className='step-checkpoints-content'>
                      <b>Connected with MetaMask</b>
                      <p>
                        If not connected, click the "Connect Wallet" button in
                        the top right corner
                      </p>
                    </div>
                    <input
                      type='radio'
                      name='stepCheckPointsRadio'
                      className='step-checkpoints-radio'
                    ></input>
                  </li>
                  <li className='step-checkpoints-item'>
                    <div className='step-checkpoints-content'>
                      <b>Connected with MetaMask</b>
                      <p>
                        If not connected, click the "Connect Wallet" button in
                        the top right corner
                      </p>
                    </div>
                    <input
                      type='radio'
                      name='stepCheckPointsRadio'
                      className='step-checkpoints-radio'
                    ></input>
                  </li>
                  <li className='step-checkpoints-item'>
                    <div className='step-checkpoints-content'>
                      <b>Connected with MetaMask</b>
                      <p>
                        If not connected, click the "Connect Wallet" button in
                        the top right corner
                      </p>
                    </div>
                    <input
                      type='radio'
                      name='stepCheckPointsRadio'
                      className='step-checkpoints-radio'
                    ></input>
                  </li>
                  <li className='step-checkpoints-item'>
                    <div className='step-checkpoints-content'>
                      <b>Connected with MetaMask</b>
                      <p>
                        If not connected, click the "Connect Wallet" button in
                        the top right corner If not connected, click the
                        "Connect Wallet" button in the top right corner If not
                        connected, click the "Connect Wallet" button in the top
                        right corner
                      </p>
                    </div>
                    <input
                      type='radio'
                      name='stepCheckPointsRadio'
                      className='step-checkpoints-radio'
                    ></input>
                  </li>
                </ul>
                <div className='step-checkpoints-check'>
                  <input
                    type='checkbox'
                    id='stepCheckpointsCheck'
                    checked={hadReadConditionCheck}
                    onChange={handleCheckInCheckPoints}
                  />
                  <label htmlFor='stepCheckpointsCheck'>
                    I have read the
                    <a href='https://bscpad.com/terms-of-use' target='_blank'>
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
        </React.Fragment>
      )}
    </Box>
  );
}
