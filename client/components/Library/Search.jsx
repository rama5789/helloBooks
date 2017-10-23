import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-materialize';


/**
 * displays a search Input
 * @param {Object} props react props
 * @returns {JSX} JSX element (search form)
 */
const Search = props =>
  (
    <div className={props.className}>
      <Input s={12} className="icon-prefix"
        type='search'
        label={'Search Books'}
        onChange={e => props.onChange(e)}
      >
      </Input>
    </div>
  );

Search.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Search;