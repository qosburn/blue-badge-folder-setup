import logo from './logo.svg';
import './App.css';
import Header from './components/day01-challenge/Header';
import AboutMe from './components/day01-challenge/AboutMe';
import StudentInformation from './components/day01-challenge/StudentInformation';
import Footer from './components/day01-challenge/Footer';
//a single JSS element-- must stay in the single div

const welcomeName = 'Quinn';
function App() {
  return (
    <div className="App">
      <h1>Hellow Quinn {welcomeName}</h1>
      <h2>We just modified our root App component</h2>
      {/*this sia comment*/}
      <Header />
      <AboutMe />
      <StudentInformation studentName="Pam" grade="B" subject="Science" />
      <StudentInformation studentName="Tom" grade="F" subject="Art" />
      <StudentInformation studentName="Frank" grade="A" subject="Shop" />
      <Footer />
      <h3>Create the following..</h3>
      <ul>
        <li>Component</li>
      </ul>
    </div>
  );
}

export default App;
