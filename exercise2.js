fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json // Complete this code
    const mapped = completed.map( todo => {
        return {
            title: todo.title
        }
    });
    console.log(mapped)
  })
  .catch(function(err) { 
    console.log(err);
  });