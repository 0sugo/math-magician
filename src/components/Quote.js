import { useEffect, useState } from 'react';
import Ninja from './Ninja';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
      method: 'GET',
      headers: { 'X-Api-key': 'CxQhbgnKF2X1iPThUiuulA==2qSxWFNNTyvLkSvt' },
    })
      .then((resp) => resp.json())
      .then((data) => setQuote(data[0].quote))
      .catch(() => {
        setHasError(true);
      });
    setIsLoading(false);
  }, [setQuote, setIsLoading]);

  if (hasError) return <div className="displayed-quote">Cant execute!!!There is an error</div>;
  if (isLoading) return <div className="displayed-quote">Loading...</div>;

  return (
    <div>
      <Ninja RandomNinja={`${quote}`} />
    </div>
  );
};

export default Quote;
