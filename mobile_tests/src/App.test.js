import { render, screen } from '@testing-library/react';
import App from './App';
import MobileCompany from './components/MobileCompany';
import EditMode from './components/editMode';
// import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import clientsHash from './clientsHash.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('работа MobileCompany', () => {
  const component = renderer.create(
    <MobileCompany name={clientsHash.companyName} clients={clientsHash.clientsArr} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const allBtn = component.root.find( el => el.props.value === 'All' ); 
  const activeBtn = component.root.find( el => el.props.value === 'Active' ); 
  const deactiveBtn = component.root.find( el => el.props.value === 'Deactive' ); 

  activeBtn.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  deactiveBtn.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  allBtn.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});

test('работа EditMode', () => {

  const component = renderer.create(
    <EditMode name={clientsHash.clientsArr[0].name} id={clientsHash.clientsArr[0].id} lastname={clientsHash.clientsArr[0].lastname} secondname={clientsHash.clientsArr[0].secondname} balance={clientsHash.clientsArr[0].balance} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const allBtn = component.root.find( el => el.props.value === 'Save' ); 
    // console.log("allBtn: ", allBtn);

});



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
