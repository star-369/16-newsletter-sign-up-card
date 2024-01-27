import { useState } from "react";
import FormCard, { Input } from "./components/FormCard";
import PopupCard from "./components/PopupCard";

function App() {
  const [isVisible, setVisibility] = useState(false);
  const [hasEmail, setEmail] = useState("");

  const handleVisibility = () => {
    setVisibility(!isVisible);
  };
  const handleSubmit = (data: Input) => {
    setEmail(data.email);
  };

  return (
    <>
      {!isVisible && (
        <FormCard onClose={handleVisibility} onSubmit={handleSubmit} />
      )}
      {isVisible && <PopupCard onClose={handleVisibility} email={hasEmail} />}
    </>
  );
}

export default App;
