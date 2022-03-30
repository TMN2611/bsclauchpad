import React from 'react';
import styles from './Projects.module.css';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
export default function Cards({ projects }) {
  const navigate = useNavigate();
  return (
    <div className={styles.projectList}>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className={styles.projectItem}
            onClick={() => {
              navigate(`/projects/${project.id}`, {
                state: { projectId: project.id },
              });
            }}
          >
            <div className={styles.projectBody}>
              <div className={styles.projectTop}>
                <div className={styles.projectIconBox}>
                  <Link to='/'>
                    <img
                      className={styles.projectIcon}
                      src={project.avatarUrl}
                      alt=''
                    />
                  </Link>
                </div>
                <div className={styles.projectTitleBox}>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <div className={styles.projectSocials}>
                    <a
                      href='#'
                      target='_blank'
                      rel='noopener'
                      className={styles.projectSocial}
                    >
                      <i className='fas fa-globe'></i>
                    </a>
                    <a
                      href='#'
                      target='_blank'
                      rel='noopener'
                      className={styles.projectSocial}
                    >
                      <i className='fab fa-telegram'></i>
                    </a>
                    <a
                      href='#'
                      target='_blank'
                      rel='noopener'
                      className={styles.projectSocial}
                    >
                      <i className='fab fa-telegram'></i>
                    </a>
                  </div>
                  <div
                    className={clsx(styles.projectStatus, {
                      [styles.projectStatusOpen]: project.statusIsOpen,
                      [styles.projectStatusClosed]: !project.statusIsOpen,
                    })}
                  >
                    {project.statusIsOpen ? 'Opens in TBA' : 'Closed'}
                  </div>
                  <span
                    className={clsx(styles.projectStatus, styles.projectPush, {
                      [styles.projectStatusOpen]: project.statusIsOpen,
                      [styles.projectStatusClosed]: !project.statusIsOpen,
                    })}
                  >
                    Push
                  </span>
                </div>
              </div>
              <div className={styles.projectDesc}>{project.desc}</div>
              <div className={styles.projectInfo}>
                <ul className={styles.projectInfoList}>
                  <li className={styles.projectInfoItem}>
                    <p className={styles.projectSwapRate}>
                      Swap rate
                      <b className={styles.projectInfoHighLight}>
                        {project.swaprate}
                      </b>
                    </p>
                  </li>
                  <li className={styles.projectInfoItem}>
                    <p className={styles.projectCap}>
                      Cap
                      <b className={styles.projectInfoHighLight}>
                        {project.cap}
                      </b>
                    </p>
                  </li>
                  <li className={styles.projectInfoItem}>
                    <p className={styles.projecAccess}>
                      Access
                      <b className={styles.projectInfoHighLight}>
                        {project.access}
                      </b>
                    </p>
                  </li>
                </ul>
              </div>

              <div className={styles.projectProgress}>
                <div className={styles.projectProgressTop}>
                  <p className={styles.projectProgressTopItem}>
                    Progress
                    <span className={styles.projectProgressTopHighLight}></span>
                  </p>
                  <p className={styles.projectProgressTopItem}>
                    Participants
                    <span className={styles.projectProgressTopHighLight}>
                      {project.participants}
                    </span>
                  </p>
                </div>
                <div className={styles.projectProgressBar}></div>
                <div className={styles.projectProgressBottom}>
                  <b className={styles.projectProgressBottomItem}>
                    {project.percents}%
                  </b>
                  <b className={styles.projectProgressBottomItem}>
                    {project.allocation}
                  </b>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
