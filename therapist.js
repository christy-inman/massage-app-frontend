const therapistUrl = "http://localhost:3000/therapists"
const flexContainer = document.querySelector("#flex-container")

fetch(therapistUrl)
    .then(parseJson)
    .then(createTherapistCards)


function parseJson(response) {
    return response.json()
}
function createTherapistCards(response) {
    response.map(createCardElements)
}
function createCardElements(therapist) {
    let therapistCard = document.createElement("div")
        therapistCard.classList.add("therapist-card")
        flexContainer.append(therapistCard)
    let img = document.createElement("img")
        img.classList.add("therapist-img")
        img.src = therapist.image
        therapistCard.append(img)
    let name = document.createElement("h2")
        name.classList.add("therapist-name")
        name.innerText = therapist.name
        therapistCard.append(name)
    let email = document.createElement("h4")
        email.classList.add("therapist-email")
        email.innerText = therapist.email
        therapistCard.append(email)
    let bio = document.createElement("p")
        bio.classList.add("therapist-bio")
        bio.textContent = therapist.bio
        therapistCard.append(bio)
    let bookAppointmentButton = document.createElement("button")
        bookAppointmentButton.classList.add("book-appointment-button")
        bookAppointmentButton.innerText = "Book an Appointment"
        bookAppointmentButton.addEventListener("click", navigateToAppointmentPage)
        therapistCard.append(bookAppointmentButton)
}
function addTherapistInfo(response) {
    response.forEach(displayTherapistInfo)
}
function displayTherapistInfo(therapist, i, response) {
    console.log(therapist)
    img.src = response[i].image
    name.innerText = response[i].name
    email.innerText = response[i].email
    bio.textContent = response[i].bio
    bookAppointmentButton.addEventListener("click", navigateToAppointmentPage)
}
function navigateToAppointmentPage() {
    alert("This feature is currently under construction, please try again soon.")
}