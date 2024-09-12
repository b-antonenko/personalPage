/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import './styles.css';

function Tabs({ data, buttons }) {
  const [activeButton, setActiveButton] = useState(buttons[0].id);
  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const dataObject = data.find((obj) => obj.id === activeButton);

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist">
        {buttons.map((item) => (
          <button onClick={() => handleButtonClick(item.id)} type="button" role="tab" className={classNames('list_item', { list_item_active: activeButton === item.id })} key={item.id}>
            <span className="list_item_title">{item.title}</span>
          </button>
        ))}
      </div>
      <div className="tabs_content">
        <h3>{dataObject.position}</h3>
        <span>{dataObject.duration}</span>
        <ul>
          {dataObject.sections.map((section, index) => <li className="experience_item" key={`${section.id}_${index}`}>{section}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Tabs;

Tabs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    position: PropTypes.string,
    duration: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.string),
  })),
  buttons: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })),
};
