function Todo({ todo, index, remove }) {
  function handle() {
    console.log('Ping:', index);
    remove(index);
  }

  return (
    <div className="todo">
      {todo.text}
      <button onClick={handle}>Delete</button>
    </div>
  );
}





// function Todo({todo,index,remove}){
//   function handle(){
//     console.log('Ping:',index);
//     remove(index);
//   }
//   return <div className="todo" onClick={handle}>{todo.text} (-)</div>
// }
