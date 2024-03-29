document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

let courses = [] 


function attachSubmitForSearch() {
    const form = document.getElementById("searchClasses")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const term = document.getElementById("searches").value
        const filteredArray = courses.filter(course => course.name.toLowerCase().includes(term.toLowerCase()))
        listCourses(filteredArray)

        form.reset()
    })
}

function fetchData() {
    fetch("http://localhost:3000/courses")
        .then(resp => resp.json())
        .then(data => {
            courses = data
            listCourses(data)})
            attachSubmitForSearch()
}

function listCourses (courses) {
    document.getElementById("courseList").innerHTML = ""
    courses.forEach(course => displayEachCourse(course))
}

function displayEachCourse(classes) {
    const ul = document.getElementById("courseList")
    const li = document.createElement("li")
    const name = document.createElement("p")
    const image = document.createElement("img")
    const description = document.createElement("p")
    const duration = document.createElement("p")
    const tuition = document.createElement("p")

    const p = document.createElement("p")

    const button = document.createElement("button")
    button.innerText = "like"
    let count = 0
    button.addEventListener("click", () => {
        count++
        console.log(p.innerText = `This button has been clicked ${count} time(s)`)
        
    })

    name.innerText = `COURSE: ${classes.name}`
    image.src = `${classes.image}`
    description.innerText = ` DESCRIPTION: ${classes.description}`
    duration.innerText = `DURATION: ${classes.duration}`
    tuition.innerText = `TUITION: ${classes.tuition} `


    li.appendChild(name)
    li.appendChild(image)
    li.appendChild(description)
    li.appendChild(duration)
    li.appendChild(tuition)

    li.appendChild(button)
    li.appendChild(p)

    ul.appendChild(li)
}



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