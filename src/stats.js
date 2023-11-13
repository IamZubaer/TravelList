export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>You start adding stuffs to the list</em>
      </footer>
    );
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / total) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have packed all your stuffs</em>
      ) : (
        <em>
          You have {total} items on your list, and you already packed {packed}(
          {percentage}%).
        </em>
      )}
    </footer>
  );
}
