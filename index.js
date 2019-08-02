const appointmentButton = document.querySelector("#appointment-button")
const therapistButton = document.querySelector("#therapist-button")
const clientButton = document.querySelector("#client-button")
const loginButton = document.querySelector("#login-button")
const submitButton = document.querySelector("#submit-button")
console.log(submitButton)

appointmentButton.addEventListener("click", navigateToAppointmentsPage)
therapistButton.addEventListener("click", navigateToTherapistsPage)
clientButton.addEventListener("click", navigateToClientProfile)
loginButton.addEventListener("click", navigateToSwitchClient)
submitButton.addEventListener("click", navigateToClientProfile)

function navigateToTherapistsPage() {
    location.href = "./therapist.html"
}
function navigateToClientProfile() {
    event.preventDefault()
    console.log(event.target)
    location.href = "./client.html"
}
function navigateToSwitchClient() {
    alert("This feature is currently under construction, please try again soon!")
    location.href = "./index.html"
}
function navigateToAppointmentsPage() {
    location.href = "./appointment.html"
}
