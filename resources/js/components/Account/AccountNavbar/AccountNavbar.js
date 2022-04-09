import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import style from './style.module.scss'


const AccountNavbar = () => {
  const [accountLinks, setAccountLinks] = useState([
    { link: 'generalinfo', linkHeading: 'Общая информация' },
    { link: 'target', linkHeading: 'Цель' },
    { link: 'achievments', linkHeading: 'Достижения' },
    { link: 'favorites', linkHeading: 'Избранное' }
  ])

  const setActive = ({ isActive }) => isActive ? style.account__navbar_link + " " + style.account__navbar_link_active : style.account__navbar_link;

  return (
    <nav className={style.account__navbar_wrapper}>
      <ul className={style.account__navbar}>
        {accountLinks.map((item) => (
          <li className={style.account__navbar_item} key={item.link}>
            <NavLink
              className={setActive}
              to={item.link}>
              {item.linkHeading}
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </nav>
  )
}

export default AccountNavbar;