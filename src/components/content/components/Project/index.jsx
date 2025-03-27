import IconGitClean from "../../../../images/icons/github2";
import IconLink from "../../../../images/icons/link";
import classNames from "classnames";
import './styles.css';

const Project = ({ name, description, stack, website, git, img, isLeftAligned }) => {

    const containerClasses = classNames('project__container', {'project__container--left': isLeftAligned})
    const imgClasses = classNames({'right': isLeftAligned})
    const stackClasses = classNames('project__stack', {'flex-container': isLeftAligned});
    const linksClasses = classNames('project__links', {'flex-container': isLeftAligned});

    return (
        <li className={containerClasses}>
        <div className='project__image'>
            <img src={img} className={imgClasses} alt="project screenshot" />
        </div>
        <div className='project__content'>
            <span className='project__container--overall'>Featured Project</span>
            <h3 className='project__name'><a href={website}>{name}</a></h3>
            <div className='project__description'>
                <span>{description}</span>
            </div>
            <div className={stackClasses}>
            <ul>
                {stack.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
            </div>
            <div className={linksClasses}>
                <ul>
                    <li><a href={website}><IconLink /></a></li>
                    <li><a href={git}><IconGitClean /></a></li>
                </ul>
            </div>
        </div>
        
      </li>
    );
}

export default Project;