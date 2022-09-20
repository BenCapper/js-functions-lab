fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json // Complete this code
    const filtered = completed.filter( (todo, index) => {
        return todo.completed === true
    });
    console.log(filtered)
  })
  .catch(function(err) { 
    console.log(err);
  });