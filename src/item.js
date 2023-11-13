export default function Item({ item, delItem, toggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => toggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => delItem(item.id)}>❌</button>
    </li>
  );
}
