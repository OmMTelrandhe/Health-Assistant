function redirectToIndex() {
    if(document.getElementById("email").value != "" && document.getElementById("name").value != ""){
        alert("Thank you for your feedback");
    window.location.href = 'index.html';
    }
}
