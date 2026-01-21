export default function LostList() {
  const items = JSON.parse(localStorage.getItem("lost") || "[]");

  return (
    <div className="page lost-bg">
      <h2>Lost Items</h2>

      {items.length === 0 && <p>No lost items found</p>}

      {items.map((i, idx) => (
        <div key={idx} className="card lost-card">
          <h3>{i.item}</h3>
          <p><b>Name:</b> {i.name}</p>
          <p><b>Description:</b> {i.desc}</p>
          <p><b>Contact:</b> {i.contact}</p>
        </div>
      ))}
    </div>
  );
}
