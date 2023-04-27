import { PropTypes } from 'prop-types';

export default function Button({ fetcher }) {
  return (
    <div>
      <div className="digits">
        <button type="button" onClick={fetcher}>AC</button>
        <button type="button" onClick={fetcher}>+/-</button>
        <button type="button" onClick={fetcher}>%</button>
        <button type="button" onClick={fetcher} className="operations">÷</button>
        <button type="button" onClick={fetcher}>7</button>
        <button type="button" onClick={fetcher}>8</button>
        <button type="button" onClick={fetcher}>9</button>
        <button type="button" onClick={fetcher} className="operations">x</button>
        <button type="button" onClick={fetcher}>4</button>
        <button type="button" onClick={fetcher}>5</button>
        <button type="button" onClick={fetcher}>6</button>
        <button type="button" onClick={fetcher} className="operations">-</button>
        <button type="button" onClick={fetcher}>1</button>
        <button type="button" onClick={fetcher}>2</button>
        <button type="button" onClick={fetcher}>3</button>
        <button type="button" onClick={fetcher} className="operations">+</button>
        <button type="button" onClick={fetcher} className="zero">0</button>
        <button type="button" onClick={fetcher}>.</button>
        <button type="button" onClick={fetcher} className="operations">=</button>
      </div>
    </div>
  );
}
Button.propTypes = { fetcher: PropTypes.func.isRequired };
