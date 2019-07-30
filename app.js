const therapistButton = document.querySelector("#therapist-button")

therapistButton.addEventListener("click", navigateToTherapistsPage)

function navigateToTherapistsPage() {
    location.href = "./therapist.html"
}