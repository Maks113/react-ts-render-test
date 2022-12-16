import { useState } from 'react';
import * as React from 'react';
import ButtonProxy from './ButtonProxy';
import PresenterProxy from './PresenterProxy';

const Provider: React.FC<any> = (props) => {
  const [counter, changeCounter] = useState(0);

  const pres = React.useMemo(
    () => <ButtonProxy callback={changeCounter} />,
    [changeCounter]
  );

  return (
    <div>
      <button onClick={() => changeCounter(Math.random())}> click 2 </button>
      {pres}
      <PresenterProxy value={counter} />
    </div>
  );
};

export default Provider;
