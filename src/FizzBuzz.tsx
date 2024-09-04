import { useState } from "react";

export default function FizzBuzz() {
  const [value, setValue] = useState(0);
  return (
    <div className="card">
      <button type="button" onClick={() => setValue((prev) => prev + 1)}>
        Increment
      </button>
      <dl>
        <div>
          <dt>Value:</dt>
          <dd>{value}</dd>
        </div>
        <div>
          <dt>Result:</dt>
          <dd>{getFizzBuzzResult(value)}</dd>
        </div>
      </dl>
    </div>
  );
}

function getFizzBuzzResult(value: number): string {
  if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buz";
  } else {
    return "Neither";
  }
}
