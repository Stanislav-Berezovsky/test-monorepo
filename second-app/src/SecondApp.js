import React from 'react';
import { SECOND_APP, AdditionalInformation } from '../../common/constant';
import redux from 'redux';

const SecondApp = () => {
  return (
    <div className="App">
      <div>{ SECOND_APP }</div>
      <AdditionalInformation />
    </div>
  );
}

export default SecondApp;
