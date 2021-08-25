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

test('работа MobileCompany', () => {

  // const componentTree = shallow(
  //   <MobileCompany name={clientsHash.companyName} clients={clientsHash.clientsArr} />
  // );
  // создаём тестовую версию компонента
  const component = renderer.create(
    <MobileCompany name={clientsHash.companyName} clients={clientsHash.clientsArr} />
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // найдём в вёрстке компонента саму кнопку
  // console.log(component.root);
  const allBtn = component.root.find( el => el.className === 'all-btn' ); 
  // и "нажмём" на неё
  // allBtn.props.onClick();
  // component.root.find('button').simulate('click');


  // получаем уже изменённый снэпшот
  // componentTree=component.toJSON();
  // expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  // buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  // componentTree=component.toJSON();
  // expect(componentTree).toMatchSnapshot();
  
  /*
  // можно эмулировать события, передавая в качестве объекта события то что нам нужно:
  wrapper.find('select').simulate('change', {
    target: { value: "hello" },
  });
  */

});





// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
