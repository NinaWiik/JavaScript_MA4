fetch('https://jsonplaceholder.typicode.com/todos')
        .then(result => result.json())
    .then((res) => {
        createTodos(res);
})
.catch(err => console.log(err))

function createTodos(result){
    for(var i=0; i < result.length; i++){
        var word = "data"
      document.getElementById("todosInfo").innerHTML += "<div class ='cards'>" + "<p>" + "User Id: " + result[i].userId + "<p>" + "ID: " + result[i].id + "<p>" + "Title: " + result[i].title + "<p>" + "Completed: " + result[i].completed + "</div>" + "</b>" + "</div>"
   }
}
