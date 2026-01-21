export default function LostList() {
  const items = JSON.parse(localStorage.getItem("lost") || "[]");

  return (
    <div className="container">
      <h2>Lost Items</h2>
      {items.map((i, idx) => (
        <div key={idx} className="card lost">
          <h3>{i.item}</h3>
          <p>{i.desc}</p>
          <p>{i.contact}</p>
        </div>
      ))}
    </div>
  );
}
