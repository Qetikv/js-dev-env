
// const getMovie = (name) => {
//     return fetch(`http://www.omdbapi.com/?t=${name}&apiKey=beec1789`).then(res => res.json())
// }

// //task 2 

// function getActors(movieTitle) {
//     return getMovie(movieTitle)
//     .then((movie) =>movie.Actors.split(', ')
//     .then(name => name.split('')))
// }

// getActors('Avatar').then((movie) => console.log(movie))

// //task 4

// function getAmount(amountOfTime){
//     return getMovie(amountOfTime).reduce(amountOfTime.Runtime)
// }

// getAmount('Avatar','Titanic').then((movie) => console.log(movie))



// // task 1
// function howManyYearsAgo(movieTitle) {
//    return getMovie(movieTitle).then(
//        ((movie) => (new Date()).getFullYear - movie.Year)
//    )
  
// }
// howManyYearsAgo('Avatar').then((year) => console.log(year))
