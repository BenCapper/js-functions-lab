fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json // Complete this code
    const reduced = completed.reduce( (total, todo, index, array) => {
    const key = todo.userId
      if (todo.completed === true) {
        if (total[key]) total[key] += 1
        else total[key] = 1
      }
      return total
    },[]);
    console.log(reduced)
  })
  .catch(function(err) { 
    console.log(err);
  });

//In the body of the fetch, you are required to write the code
//that computes the number of completed todos per user.
//A user with no completed todos should not appear in the output.
//Use the Array.reduce HOF in your solution.
