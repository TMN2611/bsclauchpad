import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProjectsSelector } from '../../redux/selectors';
import Button from '../../component/Ui/Button';
import BasicTabs from '../../component/Ui/ProjectDetailTabs';
import SmallModal from '../../component/Ui/SmallModal';
import './detailproject.css';
export default function DetailProject() {
  const [projectInfor, setProductInfor] = useState();
  const { pathname } = useLocation();
  const projectId = parseInt(pathname.slice(10).trim());
  const projects = useSelector(ProjectsSelector);

  const [isSmallModalOpen, setSmallModalOpen] = React.useState(false);
  const handleOpenSmallModal = () => setSmallModalOpen(true);
  const handleCloseSmallModal = () => setSmallModalOpen(false);
  useEffect(() => {
    if (projects) {
      const findProject = projects.find((project) => {
        return project.id == parseInt(projectId);
      });
      console.log(findProject);
      setProductInfor(findProject);
    }
  }, [projects]);
  return (
    <div className='detailproject'>
      {projectInfor ? (
        <div className='container'>
          <div className='detailproject-banner'>
            <div className='detailproject-banner-left'>
              <div className='detailproject-iconBox'>
                <span>
                  <img src={projectInfor.avatarUrl} alt='' />
                </span>
              </div>
              <div className='detailproject-titleBox'>
                <h2>Marvelous NFTs</h2>
                <div className='detailproject-socials'>
                  <a className='detailproject-social'>
                    <i className='fas fa-globe-americas'></i>
                  </a>
                  <a className='detailproject-social'>
                    <i className='fab fa-twitter'></i>
                  </a>
                  <a className='detailproject-social'>
                    <i className='fab fa-telegram-plane'></i>
                  </a>
                  <a className='detailproject-social'>
                    <i className='fa-solid fa-m'></i>
                  </a>
                </div>
                <span className='projectStatusClosed'>Closed</span>
                <span className='detailproject-push'>Push</span>
              </div>
              <p className='detailproject-desc'>{projectInfor.desc}</p>
              <div
                onClick={() => {
                  console.log(123);
                  handleOpenSmallModal();
                }}
              >
                <Button title={'Connect Wallet'} primary />
              </div>
            </div>
            <div className='detailproject-banner-right'>
              <div className='detailproject-banner-right-header'></div>
              <div className='detailproject-progress'>
                <div className='detailproject-progress-line'></div>
                Swap progress <br />
                <div
                  className='detailproject-progress-percent'
                  style={{ width: `${projectInfor.percents}%` }}
                ></div>
                <span className='detailproject-progress-label'>
                  <span>
                    <b>{projectInfor.percents}</b>
                  </span>
                  <span>{projectInfor.allocation} BUSH</span>
                </span>
              </div>
            </div>
          </div>

          <BasicTabs values={projectInfor} />
          <SmallModal
            isSmallModalOpen={isSmallModalOpen}
            onOpenSmallModal={handleOpenSmallModal}
            onCloseSmallModal={handleCloseSmallModal}
          />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
