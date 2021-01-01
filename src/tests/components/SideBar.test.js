import { shallow } from '../../enzyme';
import { SideBar } from '../../components/SideBar';

const sideBar = shallow(<SideBar />);

test('menu is opened', () => {
  const menuButton = sideBar.find('.side-bar__hamburger-wrapper');
  
  menuButton.simulate('click');
  expect(sideBar.hasClass('side-bar--active')).toBe(true);
});

test('menu is closed', () => {
  const menuButton = sideBar.find('.side-bar__hamburger-wrapper');
  
  menuButton.simulate('click');
  expect(sideBar.hasClass('side-bar--active')).toBe(false);
})
