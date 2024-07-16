document.getElementById("generate-btn").addEventListener("click", function() {
    // Generate a random 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    
    // Display the OTP
    document.getElementById("otp-display").innerText = `Your OTP: ${otp}`;
});