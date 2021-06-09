import React from 'react';
import { ContentsList } from 'nhsuk-react-components';
import PropTypes from 'prop-types';

const SideNav = ({ children }) => (
  <div className="article-nav">
    <h2 className="article-nav__title"> Page contents</h2>
    <ContentsList
      className="article-nav-list"
      visuallyHiddenText={false}
      aria-label="Pages in this guide"
    >
      {children}
    </ContentsList>
  </div>
);

const Item = ({ children, ...rest }) => (
  <ContentsList.Item className="article-nav-list__item" {...rest}>
    {children}
  </ContentsList.Item>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.shape(),
};

Item.defaultProps = {
  rest: {},
};

SideNav.propTypes = {
  children: PropTypes.node.isRequired,
};

SideNav.Item = Item;

export default SideNav;
