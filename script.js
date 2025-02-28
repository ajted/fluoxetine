function checkPassword() {
    let password = document.getElementById("password").value;
    if (password === "16102002") {
        document.getElementById("entry-screen").classList.remove("visible");
        document.getElementById("welcome-screen").classList.add("visible");
    } else {
        alert("Wrong Password! Try Again.");
    }
}

function showQuotes() {
    document.getElementById("welcome-screen").classList.remove("visible");
    document.getElementById("quotes-screen").classList.add("visible");
}

function showChat() {
    document.getElementById("quotes-screen").classList.remove("visible");
    document.getElementById("chat-screen").classList.add("visible");
}

function showProposal() {
    document.getElementById("chat-screen").classList.remove("visible");
    document.getElementById("proposal-screen").classList.add("visible");
}

function celebrate() {
    alert("Congratulations! Love is in the air! 🎉💖");
}
