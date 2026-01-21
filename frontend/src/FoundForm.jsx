import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FoundForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", contact: "", item: "", desc: "" });

  const submit = () => {
    const data = JSON.parse(localStorage.getItem("found") || "[]");
    data.push(form);
    localStorage.setItem("found", JSON.stringify(data));
    navigate("/found");
  };

  return (
    <div className="page found-bg">
      <h2>Found Item Form</h2>

      <input placeholder="Your Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Contact Number" onChange={e => setForm({ ...form, contact: e.target.value })} />
      <input placeholder="Item Name" onChange={e => setForm({ ...form, item: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, desc: e.target.value })}></textarea>

      <button className="found-btn" onClick={submit}>Submit Found Item</button>
    </div>
  );
}
