export default function FoundList() {
  const items = JSON.parse(localStorage.getItem("found") || "[]");

  return (
    <div className="page found-bg">
      <h2>Found Items</h2>

      {items.length === 0 && <p>No found items yet</p>}

      {items.map((i, idx) => (
        <div key={idx} className="card found-card">
          <h3>{i.item}</h3>
          <p><b>Name:</b> {i.name}</p>
          <p><b>Description:</b> {i.desc}</p>
          <p><b>Contact:</b> {i.contact}</p>
        </div>
      ))}
    </div>
  );
}
