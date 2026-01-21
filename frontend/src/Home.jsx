import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Lost & Found System</h1>

      <button onClick={() => navigate("/lost-form")}>Report Lost Item</button>
      <button onClick={() => navigate("/found-form")}>Report Found Item</button>
      <button onClick={() => navigate("/lost")}>View Lost Items</button>
      <button onClick={() => navigate("/found")}>View Found Items</button>
    </div>
  );
}
