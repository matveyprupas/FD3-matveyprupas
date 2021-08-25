import './App.css';
import MobileCompany from './components/MobileCompany';
import clientsHash from './clientsHash.json';

function App() {
  return (
    <MobileCompany name={clientsHash.companyName} clients={clientsHash.clientsArr} />
  );
}

export default App;
