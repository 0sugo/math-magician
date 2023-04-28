import { useEffect, useState } from 'react';
import Button from './Button';
import Calculate from '../logic/Calculate';
import Ninja from './Ninja';

export default function Calculator() {
  const [show, setShow] = useState({ total: null, next: null, operation: null });
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=education', {
      method: 'GET',
      headers: { 'X-Api-key': 'CxQhbgnKF2X1iPThUiuulA==2qSxWFNNTyvLkSvt' },
    })
      .then((resp) => resp.json())
      .then((data) => setQuote(data[0].quote));
  }, []);

  return (
    <main className="combined">
      <div className="display">{show.next || show.total || 0 }</div>
      <Button fetcher={(e) => {
        const valueClicked = e.target.innerHTML;
        const result = Calculate(show, valueClicked);
        setShow(result);
      }}
      />
      <Ninja RandomNinja={`"${quote}"`} />
    </main>
  );
}
