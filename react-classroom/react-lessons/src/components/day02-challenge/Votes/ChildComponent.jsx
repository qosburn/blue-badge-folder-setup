import React from 'react';
function ChildComponent(props) {
  const { name } = props.votes;

  return (
    <di>
      <h2>Hello from Child</h2>
      <p>
        {props.votes.name} had a totlal vote count of {props.votes.count}{' '}
        {/* {props.phrase} */}
      </p>
    </di>
  );
}
export default ChildComponent;
