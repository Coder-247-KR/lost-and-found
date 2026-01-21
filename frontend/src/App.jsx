import { useState } from "react";
import "./App.css";

function App() {
  const [type, setType] = useState("lost");
  const [items, setItems] = useState([]);

  const [form, setForm] = useState({
    name: "",
    contact: "",
    item: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    if (!form.name || !form.contact || !form.item) return alert("Fill all required fields");

    setItems([...items, { ...form, type }]);

    setForm({
      name: "",
      contact: "",
      item: "",
      description: "",
      location: "",
    });
  };

  return (
    <div className="container">
      <h1>Lost & Found Portal</h1>

      <div className="tabs">
        <button
          className={type === "lost" ? "active" : ""}
          onClick={() => setType("lost")}
        >
          Lost Item
        </button>
        <button
          className={type === "found" ? "active" : ""}
          onClick={() => setType("found")}
        >
          Found Item
        </button>
      </div>

      <div className="form">
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
        <input name="contact" placeholder="Contact Number" value={form.contact} onChange={handleChange} />
        <input name="item" placeholder="Item Name" value={form.item} onChange={handleChange} />
        <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
        <textarea
          name="description"
          placeholder="Item Description"
          value={form.description}
          onChange={handleChange}
        ></textarea>

        <button onClick={submitForm}>Submit</button>
      </div>

      <h2>Recent Entries</h2>

      <div className="list">
        {items.length === 0 && <p>No entries yet</p>}

        {items.map((i, index) => (
          <div key={index} className={`card ${i.type}`}>
            <h3>{i.item}</h3>
            <p><b>Status:</b> {i.type.toUpperCase()}</p>
            <p><b>Name:</b> {i.name}</p>
            <p><b>Contact:</b> {i.contact}</p>
            <p><b>Location:</b> {i.location}</p>
            <p>{i.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
