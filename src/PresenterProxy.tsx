import { useRef } from 'react';
import * as React from 'react';
import Presenter from './Presenter';

const PresenterProxy: React.FC<any> = (props) => {
  const renderCounter  = useRef(0);
  renderCounter.current = renderCounter.current + 1;

  return (
    <div>
      <div> Presenter: {renderCounter.current} </div>
      <Presenter value={props.value} />
    </div>
  );
};

export default PresenterProxy;
