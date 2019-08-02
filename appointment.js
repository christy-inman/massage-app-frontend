const flexContainer = document.querySelector(".flex-container")
const requestButton = document.querySelector("#submit-button")


requestButton.addEventListener("click", createAppointmentCard)


function createAppointmentCard() {
    event.preventDefault()

    let appointment = document.createElement("div")
        appointment.classList.add("appointment-card")
        flexContainer.append(appointment)
    let name = document.createElement("h2")
        name.innerText = "Adalia Williams"
        appointment.append(name)
    let username = document.createElement("h4")
        username.innerText = "adaWill"
        appointment.append(username)
    let therapist = document.createElement("h4")
        therapist.innerText = "Kitty Paws, LMT"
        appointment.append(therapist)
    let date = document.createElement("h4")
        date.innerText = "08/04/2019"
        appointment.append(date)
    let time = document.createElement("h4")
        time.innerText = "12:30 PM"
        appointment.append(time)
    let notes = document.createElement("p")
        notes.innerText = "90 minutes, allergic to lavender"
        appointment.append(notes)
    let deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-button")
        deleteButton.innerText = "Delete Appointment"
        deleteButton.addEventListener("click", reloadPage)
        appointment.append(deleteButton)
}
function reloadPage() {
    location.reload();
}