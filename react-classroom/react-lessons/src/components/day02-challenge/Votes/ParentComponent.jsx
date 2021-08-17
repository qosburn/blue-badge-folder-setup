import ChildComponent from './ChildComponent';

function ParentComponent(props) {
  const votes = [
    { name: 'Abe Lincoln', count: 139033 },
    { name: 'Stephen Doughlas', count: 115509 },
  ];

  return (
    <di>
      <div>
        <h1>Hello from Parent</h1>
      </div>

      {votes.map((vote) => (
        <ChildComponent votes={vote} phrase={props.phrase} />
      ))}
    </di>
  );
}
export default ParentComponent;
