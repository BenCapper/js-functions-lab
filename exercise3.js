fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json // Complete this code
    const filtered = completed.filter(
        todo => todo.userId != null && todo.completed === true
    ).map(todo => {
        return{
            userId: todo.userId,
            title: todo.title
        }
    });
    console.log(filtered)
  })
  .catch(function(err) { 
    console.log(err);
  });
