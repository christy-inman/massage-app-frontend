const therapistUrl = "http://localhost:3000/therapists"

const therapistCard = document.querySelector("#therapist-card")
const img = document.querySelector("#therapist-img")
const name = document.querySelector("#therapist-name")
const email = document.querySelector("#therapist-email")
const bio = document.querySelector("#therapist-bio")
const bookAppointmentButton = document.querySelector("#book-appointment-button")

bookAppointmentButton.addEventListener("click", navigateToAppointmentPage)

fetch(therapistUrl)
    .then(parseJson)
    .then(displayTherapistInfo)


function parseJson(response) {
    return response.json()
}
function displayTherapistInfo(therapist) {
    img.src = therapist[0].image
    name.innerText = therapist[0].name
    email.innerText = therapist[0].email
    bio.textContent = therapist[0].bio
}
function navigateToAppointmentPage() {
    alert("This feature is currently under construction, please try again soon.")
}