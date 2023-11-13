import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packingList";
import Stats from "./stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Car", quantity: 1, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function addItem(item) {
    setItems([...items, item]);
  }
  function delItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAdd={addItem} />
      <PackingList
        items={items}
        setItems={setItems}
        onDel={delItem}
        onToggle={toggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
