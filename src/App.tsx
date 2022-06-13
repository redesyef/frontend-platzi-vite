import { useState } from "react";
import "./App.css";
import Auth from "./pages/Auth";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
