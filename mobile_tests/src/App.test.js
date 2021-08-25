import { render, screen } from '@testing-library/react';
import App from './App';
import MobileCompany from './components/MobileCompany';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import clientsHash from './clientsHash.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('sort of MobileCompany', () => {
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



test('open and close EditMode', () => {
  const component = renderer.create(
    <MobileCompany name={clientsHash.companyName} clients={clientsHash.clientsArr} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const addBtn = component.root.find( el => el.props.value === 'Add client' ); 
  const editBtns = component.root.findAll( el => el.props.value === 'Edit' ); 

  
  addBtn.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  editBtns.forEach( el => {
    el.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  } );

  const closeEditModeBtn = component.root.find( el => el.props.value === 'Cancel' ); 

  closeEditModeBtn.props.onClick();
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
});


test('remove MobileClients', () => {
  const component = renderer.create(
    <MobileCompany name={clientsHash.companyName} clients={clientsHash.clientsArr} />
  );

  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  const editBtns = component.root.findAll( el => el.props.value === 'Edit' ); 

  editBtns.forEach( el => {
    el.props.onClick();
    const detBtn = component.root.find( el => el.props.value === 'Del' ); 
    
    detBtn.props.onClick();
    componentTree=component.toJSON();
    expect(componentTree).toMatchSnapshot();
  } );
});
