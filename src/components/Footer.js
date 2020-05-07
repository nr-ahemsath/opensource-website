import { Link } from 'gatsby';
import React from 'react';
import navLinks from '../data/navigation.json';

import styles from './Footer.module.scss';
import editIcon from '../images/icon-edit.svg';

const Footer = () => {
  const renderNavLinks = () => {
    const sortedNavLinks = navLinks.navigation.sort((a, b) =>
      a.order > b.order ? 1 : -1
    );

    return sortedNavLinks.map(navItem => {
      return (
        <li className={styles.footerNavLinkItem} key={navItem.order}>
          <Link to={navItem.link} className={styles.footerNavLink}>
            {navItem.label}
          </Link>
        </li>
      );
    });
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContents}>
        <div className={styles.footerLogoContainer}>
          <Link to="/" className={styles.footerLogo}>
            New Relic Open Source
          </Link>
          <a href="#" className={styles.editButton}>
            <img
              src={editIcon}
              alt="pencil icon"
              className={styles.editButtonIcon}
            />
            Edit this page
          </a>
        </div>
        <div className={styles.meta}>
          <small className={styles.version}>Version 0.2.4</small>
          <small className={styles.footerLegal}>
            Copyright &copy; {new Date().getFullYear()} New Relic Inc.
          </small>
        </div>
        <ul className={styles.footerNavLinks}>{renderNavLinks()}</ul>
      </div>
    </footer>
  );
};

export default Footer;
