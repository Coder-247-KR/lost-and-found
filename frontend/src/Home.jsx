import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page home">
      <h1>Lost & Found Portal</h1>
      <p>Report or find lost items easily</p>

      <div className="home-buttons">
        <button className="lost-btn" onClick={() => navigate("/lost-form")}>
          Report Lost Item
        </button>
        <button className="found-btn" onClick={() => navigate("/found-form")}>
          Report Found Item
        </button>
        <button className="view-btn" onClick={() => navigate("/lost")}>
          View Lost Items
        </button>
        <button className="view-btn" onClick={() => navigate("/found")}>
          View Found Items
        </button>
      </div>
    </div>
  );
}
