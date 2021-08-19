import React from 'react';
import './App.css';
import MobileCompany from './components/MobileCompany';

function App() {

  let companyName='Velcom';
  let clientsArr=[ 
    {id:101, lastname:"Иванов", name: "Иван", secondname: "Иванович", balance:200, active: true}, 
    {id:105, lastname:"Сидоров", name: "Сидор", secondname: "Сидорович", balance:2700, active: true}, 
    {id:110, lastname:"Петров", name: "Петр", secondname: "Петрович", balance:-2200, active: true},
    {id:120, lastname:"Прупас", name: "Матвей", secondname: "Викторович", balance:100500, active: true},
  ];

  return (
    <MobileCompany name={companyName} clients={clientsArr} />
  );
}

export default App;
