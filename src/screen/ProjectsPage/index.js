import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './projects.css';
import Projects from '../../component/Projects';
import { v4 as uuidv4 } from 'uuid';
import Pagination from '../../component/Ui/Pagination';
import { useSelector } from 'react-redux';
import Table from '../../component/Ui/ProjectDetailTableInfo';
import { ProjectsSelector } from '../../redux/selectors';
export default function ProjectsPage() {
  const [projectsClosed, setProjectsClosed] = useState([]);
  const [projectsOpen, setProjectsOpen] = useState([]);

  const [displayProject, setDisplayProject] = useState([]);
  const [pageNumber, setPageNumber] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [numberProjectsOnPage, setNumberProjectsOnPage] = useState(5);
  const [searchInput, setSearchInput] = useState('');

  // Get projects in redux store
  const projects = useSelector(ProjectsSelector);
  useEffect(() => {
    if (projects) {
      const pagenumber = Math.ceil(projects.length / numberProjectsOnPage);
      setPageNumber(pagenumber);
      const projectsclosed = projects.filter((project) => {
        return !project.statusIsOpen;
      });
      console.log(projectsclosed);
      setProjectsClosed(projectsclosed);
    }
  }, [projects]);

  //  Get projects is openning
  useEffect(() => {
    if (projects) {
      const projectsopen = projects.filter((project) => {
        return project.statusIsOpen;
      });
      setProjectsOpen(projectsopen);
    }
  }, [projects]);

  // Get projects closed
  useEffect(() => {
    if (projectsClosed.length != 0) {
      const displayProject = handleSpliceProjects(currentPage);
      setDisplayProject(displayProject);
    }
  }, [projectsClosed]);

  const handleSpliceProjects = (index) => {
    let newProjects = projectsClosed;

    const start = (index - 1) * numberProjectsOnPage;
    const end = start + numberProjectsOnPage;
    newProjects = projectsClosed.slice(start, end);

    return newProjects;
  };

  const handleChangePage = (event, index) => {
    setCurrentPage(index);
    setDisplayProject(handleSpliceProjects(index));
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    const searhProjects = projectsClosed.filter((project) =>
      project.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setDisplayProject(searhProjects);
  };

  console.log(searchInput);
  return (
    <div className='projects'>
      <div className='container'>
        <div className='projects-container'>
          <div className='projects-openNow'>
            <h2 className='projects-heading'>Projects Open Now</h2>
            <p className='projects-desc'>No projects currently open</p>
          </div>
          <div className='projects-commingSoon'>
            <h2 className='projects-heading'>Projects Coming soon</h2>
            <Projects projects={projectsOpen} />
          </div>
          <div className='projects-closed'>
            <h2 className='projects-heading'>Projects Closed</h2>
            <div className='projects-search'>
              <div className='projects-search-wrapper'>
                <i className='projects-search-icon fa-solid fa-magnifying-glass'></i>
                <input
                  value={searchInput}
                  onChange={handleSearch}
                  type='text'
                  className='projects-search-input'
                  placeholder='Project Name'
                />
              </div>
            </div>

            <Projects projects={displayProject} />
          </div>
          <div className='projects-pagination'>
            <Pagination onChangePage={handleChangePage} count={pageNumber} />
          </div>
        </div>
      </div>
    </div>
  );
}
