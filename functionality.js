//Create a function to fetch and dislay data
function fetchData () {
    fetch ("http://localhost:3000/courses")
    .then (res => res.json())
    .then (courses => {
        const coursesBody = courses.map(courses => {
            return `
            <div class="courses"
                <p> <img src="${courses.image}" alt="${courses.name} /></p>
                <p id="courses"> <b> Course: ${courses.name.toUpperCase()} </b> </p>
                <p> Description: ${courses.description} </p>
                <p> <i> Duration: ${courses.duration} </i> </p>
                <p> <b> Tuition: ${courses.tuition} </b> </p>
                <br>
                <br>
            </div>
            `
        })
        .join("");

        document.querySelector("#courseList").insertAdjacentHTML("beforeend", coursesBody);
    })
    .catch(error => {
        console.log(error)
    });
}
fetchData()


// Add two event listeners to the register and input forms 
document.addEventListener("DOMContentLoaded", ()=> {
    let registerForm = document.getElementById("registerForm")
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault()
        alert("You have succesfully registered! You should receive an email soon.")
        registerForm.reset()
})
let form = document.getElementById("create_reviews")
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        inputReviews(e.target.review.value)
        form.reset()
    })
})


// Create a function for reviews with a delete button with an event listener
function inputReviews(review){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x' 
    li.textContent = `${review} `    
    li.appendChild(btn)
    document.querySelector('#reviews').appendChild(li)
 }

 // Create a function to delete the reviews
function handleDelete(e) {
    e.target.parentNode.remove()
}