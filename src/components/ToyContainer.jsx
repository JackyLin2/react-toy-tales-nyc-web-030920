import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  return(
    <div id="toy-collection">
      {<ToyCard toys={props.toys} fetchData={props.fetchData} />}
    </div>
  );
}

export default ToyContainer;
