import './App.css';

function App() {
  const foods =['chocolat','chips','cake','biscuits','drinks'];
  const palces =[
    {name:'New Yourk'},
    {name:'London'},
    {name:'Madives'},
    {name:'Washington'}
  ]
  
  return (
    <div className="App">
    {
        foods.map(food =><Persion name={food}></Persion>)
      }

        <h1>Viists Some Wonderful Palces</h1>
      {
        palces.map(place => <Persion name={place.name}></Persion>)
      }

      {/* <header className="App-header">
      
         <Persion name="Jack" text="Dont't worry"></Persion>
         <Persion></Persion>
         <Persion name="Alia"></Persion>
         <Persion></Persion>
         <Persion></Persion>
         <Persion name="Tom"></Persion>
      </header> */}
    </div>
  );
}

function Persion (props){
  return (
    <div className="persion">
      <h1>{props.name} </h1>
      <p>No. It's alright!! {props.text}</p>
    </div>
  )
}
export default App;
