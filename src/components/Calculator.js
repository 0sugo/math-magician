export default function Calculator() {
  return (
    <main className="combined">
      <div className="display">0</div>
      <div>
        <ul className="digits">
          <li>AC</li>
          <li>+/-</li>
          <li>%</li>
          <li className="operations">/</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li className="operations">*</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li className="operations">-</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li className="operations">+</li>
          <li className="zero">0</li>
          <li>.</li>
          <li className="operations">=</li>
        </ul>
      </div>
    </main>
  );
}
