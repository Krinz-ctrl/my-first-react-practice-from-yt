function ListGroup() {
  const items = ["New York", "san Francisco", "Tokyo", "London"];
  const num = [];
  const message = num.length === 0 ? <p>no item found</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p> No item found</p> : null;
  };
  return (
    <>
      <h1>list</h1>
      {message}
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
