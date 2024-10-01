const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}
// Simulate payment status
let paymentStatus = false; // false indicates payment has not been made

// Apply the blur effect and display payment reminder if payment is not made
document.addEventListener("DOMContentLoaded", function() {
    if (!paymentStatus) {
        // Blur the entire page
        document.body.style.filter = "blur(10px)";
        document.body.style.pointerEvents = "none"; // Disable interactions

        

        // Append the overlay to the body
        document.body.appendChild(paymentOverlay);

        // Stop further scripts from running
        return;
    }
    
    
});
