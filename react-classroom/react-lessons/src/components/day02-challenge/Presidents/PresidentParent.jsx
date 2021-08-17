// President Parent is responsible using the map feature and call child
// President Child is responsible for displaying the information
// see if display all presdidents first and last name by using the map
//silver create a filter array so the child only display the presidents that are alive (using filter and map or swith)
//Gold: Display all presidents that dide and the age that they were when the died-- Assume full year

import PresidentChild from './PresidentChild';
import { presidentsArray } from './presidents.constant';
// const AllPresidents = presidentsArray.filter(function(p))

function PresidentParent() {
  return (
    <div>
      Hello from president parent comp
      {presidentsArray.map((president) => (
        <PresidentChild first={president.first} last={president.last} />
      ))}
    </div>
  );
}

export default PresidentParent;
