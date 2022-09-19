// TODO
const {useState} = React;

const App = () => {
  return (
    <div>
      <h1>Grocery List</h1>
      <GroceryList listOfItems={['Cucumber', 'Kale', 'Peaches']}/>
    </div>
  )
}



const GroceryList = (props) => {
  return (
    <ul>
      {props.listOfItems.map((item) => (
        <GroceryListItem item ={item} />
      ))}
    </ul>
  )
}

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isHovered? 'bold' : 'normal'
  };

  return (
    <li style ={style} onClick = {() => setIsDone(!isDone)} onMouseEnter = {() => setIsHovered(!isHovered)} onMouseLeave = {() => setIsHovered(!isHovered)}>
      {props.item}
    </li>

  )
}



ReactDOM.render(<App />, document.getElementById('app'));