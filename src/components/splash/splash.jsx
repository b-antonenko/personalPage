import React from 'react';
import Ab from '../../images/icons/ab';
import './index.css';

function SplashView() {
    return (<div style={{height: '100%', width: '100%', backgroundColor: '#0a192f', display: 'flex', flexDirection: 'column', position: 'absolute', zIndex: 100, overflow: 'hidden', alignItems: 'center', justifyContent: 'center'}}>
                <div className="eyes" />
                    <Ab height='100' width='100' />
                    <div className="loader"/>
    </div>);
};

export default SplashView;
