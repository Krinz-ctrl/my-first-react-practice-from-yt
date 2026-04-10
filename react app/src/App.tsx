import ListGroup from "./components/ListGroups";

function App() {
  let items = ["New York", "san Francisco", "Tokyo", "London"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}
export default App;
