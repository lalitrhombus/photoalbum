import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

const title = 'Photo Album';

function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div className={s.root}>
      Photo Album
    </div>
  );
}

Home.propTypes = {
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
