export default function FoundList() {
  const items = JSON.parse(localStorage.getItem("found") || "[]");

  return (
    <div className="container">
      <h2>Found Items</h2>
      {items.map((i, idx) => (
        <div key={idx} className="card found">
          <h3>{i.item}</h3>
          <p>{i.desc}</p>
          <p>{i.contact}</p>
        </div>
      ))}
    </div>
  );
}
