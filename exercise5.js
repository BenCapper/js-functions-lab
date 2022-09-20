fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json // Complete this code
    const reduced = completed.reduce( (total, todo, index, array) => {
      if (todo.completed === false) {
        total.push({userId: todo.userId, title: todo.title })
      }
      return total
    },[]);
    console.log(reduced)
  })
  .catch(function(err) { 
    console.log(err);
  });

//In the body of the fetch,
//you are required to write the code
//that creates an array of uncompleted todo objects,
//where an object contains a userID and todo title.
//It then displays the array


//In the fetch body, you are required to
//implement the exact requirement as Exercise 3
//BUT replace the map-filter combination with the reduce HOF.
//
//Hint: The initial value for the reducer's accumulator
//will be an empty array ( [] ).