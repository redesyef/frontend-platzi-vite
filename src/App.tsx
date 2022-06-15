import { useState } from "react";
import Auth from "./pages/Auth";
import EmailSent from "./pages/EmailSent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <EmailSent/>
      <Auth />
    </div>
  );
}

export default App;
