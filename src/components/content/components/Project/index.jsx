import IconGitClean from "../../../../images/icons/github2";
import IconLink from "../../../../images/icons/link";
import photo from '../../../../images/react-poster.png'

const Project = () => {
    console.log('hello');

    return (
        <div className='project__container'>
        <div className="project__image">
            <img src={photo} alt="project screenshot" />
        </div>
        <div className='project__content'>
        <span className='project__container--overall'>Featured Project</span>
        <h3 className='project__name'><a href="#">Project name</a></h3>
        <div className='project__description'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </span>
        </div>
        <div className='project__stack'>
          <ul>
            <li>tech 1</li>
            <li>tech 2</li>
            <li>tech 3</li>
            <li>tech 4</li>
          </ul>
        </div>
        <div className='project__links'>
          <ul>
            <li><a href="#"><IconLink /></a></li>
            <li><a href="#"><IconGitClean /></a></li>
          </ul>
        </div>
        </div>
        
      </div>
    );
}

export default Project;