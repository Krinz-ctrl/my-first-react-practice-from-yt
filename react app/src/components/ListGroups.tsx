import { useState } from "react";

function ListGroup() {
  let items = ["New York", "san Francisco", "Tokyo", "London"];
  let selectedIndex = 0;
  // hook
  const arr = useState(-1);
  arr[0];
  arr[1];
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
            onClick={() => {
              selectedIndex == index;
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
