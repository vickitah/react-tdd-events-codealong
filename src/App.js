import { useState } from "react";

function App() {
  const [pepperoniChecked, setPepperoniChecked] = useState(false);
  const toppings = ["Cheese", ...(pepperoniChecked ? ["Pepperoni"] : [])];

  const handleChange = () => {
    setPepperoniChecked(!pepperoniChecked);
  };

  return (
    <div>
      <label htmlFor="pepperoni">Add Pepperoni</label>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniChecked}
        onChange={handleChange}
      />

      <ul>
        {toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
