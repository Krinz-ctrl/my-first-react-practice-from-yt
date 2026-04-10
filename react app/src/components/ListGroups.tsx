import type { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "san Francisco", "Tokyo", "London"];
  let selectedIndex = 0;

  // event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <ul className="list-group">
        <h1>list</h1>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
