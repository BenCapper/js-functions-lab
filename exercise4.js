fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json // Complete this code
    const reduced = completed.reduce( (total,todo, index, array) => {
      if (todo.completed === true) total += 1
      return total
    },0);
    console.log(reduced)
  })
  .catch(function(err) { 
    console.log(err);
  });

  
  //In the body of the fetch,
  //you are required to write the code that computes (and displays)
  //the number of completed todos.
  //Use the Array.reduce HOF in your solution.