import "../App.css";

const categories = [
  "Fruits & Vegetables",
  "Meat & Fish",
  "Snacks",
  "Pet Care",
  "Home & Cleaning",
  "Dairy",
  "Cooking",
  "Breakfast",
  "Beverage",
  "Health & Beauty"
];

function Sidebar() {
  return (
    <div className="sidebar">
      {categories.map((cat, i) => (
        <p key={i}>{cat}</p>
      ))}
    </div>
  );
}

export default Sidebar;