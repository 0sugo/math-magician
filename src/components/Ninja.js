import { PropTypes } from 'prop-types';

const Ninja = ({ RandomNinja }) => (
  <div>
    <p className="displayed-quote">{RandomNinja}</p>
  </div>
);

Ninja.propTypes = { RandomNinja: PropTypes.string.isRequired };

export default Ninja;
