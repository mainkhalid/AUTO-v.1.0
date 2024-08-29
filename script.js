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
let paymentStatus = yrue; // false indicates payment has not been made

// Apply the blur effect and display payment reminder if payment is not made
document.addEventListener("DOMContentLoaded", function() {
    if (!paymentStatus) {
        // Blur the entire page
        document.body.style.filter = "blur(10px)";
        document.body.style.pointerEvents = "none"; // Disable interactions

        // Create a payment reminder overlay
        let paymentOverlay = document.createElement("div");
        paymentOverlay.style.position = "fixed";
        paymentOverlay.style.top = "0";
        paymentOverlay.style.left = "0";
        paymentOverlay.style.width = "100%";
        paymentOverlay.style.height = "100%";
        paymentOverlay.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        paymentOverlay.style.display = "flex";
        paymentOverlay.style.justifyContent = "center";
        paymentOverlay.style.alignItems = "center";
        paymentOverlay.style.zIndex = "9999";
        paymentOverlay.style.fontFamily = "Arial, sans-serif";
        paymentOverlay.innerHTML = `
            <div style="text-align: center;">
                <h1 style="color: #721c24;">Payment Required</h1>
                <p style="color: #721c24;">Dear client, your payment is overdue. Please complete your payment to access the website.</p>
                <button style="padding: 10px 20px; background-color: #721c24; color: #fff; border: none; cursor: pointer;" onclick="location.href='https://paymentgateway.example.com'">Pay Now</button>
            </div>
        `;

        // Append the overlay to the body
        document.body.appendChild(paymentOverlay);

        // Stop further scripts from running
        return;
    }
    
    // If payment is made, allow normal site functionality
    // Normal website content will be loaded here...
});
