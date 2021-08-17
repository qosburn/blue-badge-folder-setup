const styleColor = {
  color: 'red',
};

const listStyle = {
  listStyle: 'none',
  color: 'green',
};

function AboutMe() {
  return (
    <di>
      <h1 style={styleColor}>My Name is Quinn Osburn</h1>
      <p style={{ color: 'blue' }}>
        I grew up as an Air brat. The last base we were stationed was Grissom
        AFB Indiana
      </p>
      <ul style={listStyle}>
        <li>St Augustine Florida</li>
        <li>Olympic National Park, Washington</li>
        <li>Sanibel Island Florida</li>
      </ul>
    </di>
  );
}
export default AboutMe;
