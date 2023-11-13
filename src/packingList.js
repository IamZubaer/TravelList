import { useState } from "react";
import Item from "./item";

export default function PackingList({ items, onDel, onToggle, setItems }) {
  const [sortby, setSortby] = useState("input");
  let sorted;
  if (sortby === "input") sorted = items;
  if (sortby === "description")
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete the items from list?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            delItem={onDel}
            toggleItem={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}
