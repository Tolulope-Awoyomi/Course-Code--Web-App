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