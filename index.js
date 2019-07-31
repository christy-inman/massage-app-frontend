const appointmentButton = document.querySelector("#appointment-button")
const therapistButton = document.querySelector("#therapist-button")
const clientButton = document.querySelector("#client-button")
const loginButton = document.querySelector("#login-button")

appointmentButton.addEventListener("click", navigateToAppointmentsPage)
therapistButton.addEventListener("click", navigateToTherapistsPage)
clientButton.addEventListener("click", navigateToClientProfile)
loginButton.addEventListener("click", navigateToLoginProfile)

function navigateToTherapistsPage() {
    location.href = "./therapist.html"
}
function navigateToClientProfile() {
    location.href = "./client.html"
}
function navigateToLoginProfile() {
    alert("This feature is currently under construction, please try again soon.")
}
function navigateToAppointmentsPage() {
    alert("This feature is currently under construction, please try again soon.")
}
