
function getCinemaDetail(id) {
    fetch(`http://localhost:3000/films/${id}`)
      .then(res => res.json())
      .then((action) => {
        const details = document.getElementById("Theatredetails");
        let  availabeTickets=action.capacity -action.tickets_sold
        details.innerHTML = `
          <p>id: ${action.id}</p>
          <p>title: ${action.title}</p>
          <p>runtime: ${action.runtime}</p>
          <p>capacity: ${action.capacity}</p>
          <p>showtime: ${action.showtime}</p>
          <p id="trailer">tickets_sold: ${action.tickets_sold}</p>
          <p>description: ${action.description}</p>
          <p id="set">availabe-tickets:${availabeTickets}</p>
          <button id="buy-ticket">buy</button><br></br>
          <img src=${action.poster}>
          
          
        `
        const btn=document.getElementById("buy-ticket")
        btn.addEventListener("click", () => buyticket(action));
      });
      


      }


  

  
  fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then((data) => {
      const movietime = document.getElementById("films");
      data.forEach((action) => {
        const markup=`<li class="filmitem" onclick=clickMovieTitle(${action.id})>${action.title}>${action.title}</li>`
        movietime.insertAdjacentHTML("beforeend",markup)
      });
  });
  
  function clickMovieTitle(id) {
    document.getElementById("Theatredetails").innerHTML = "";
    getCinemaDetail(id);
  }
  getCinemaDetail(1)

  function buyticket(action){
    let availabeTickets=action.capacity -action.tickets_sold
if (availabeTickets>0){
  action.tickets_sold ++
  const sold=document.getElementById("trailer")
  sold.textContent= action.tickets_sold
  availabeTickets--
  const avail=document.getElementById("set")
  avail.textContent=availabeTickets

} else {
  const button= document.getElementById("buy-ticket")
  button.textContent="Sold out"
  
}
  } 

  
 