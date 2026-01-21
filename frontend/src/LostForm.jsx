import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LostForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", contact: "", item: "", desc: "" });

  const submit = () => {
    const data = JSON.parse(localStorage.getItem("lost") || "[]");
    data.push(form);
    localStorage.setItem("lost", JSON.stringify(data));
    navigate("/lost");
  };

  return (
    <div className="container">
      <h2>Lost Item Form</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Contact" onChange={e => setForm({ ...form, contact: e.target.value })} />
      <input placeholder="Item" onChange={e => setForm({ ...form, item: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, desc: e.target.value })}></textarea>
      <button onClick={submit}>Submit</button>
    </div>
  );
}
