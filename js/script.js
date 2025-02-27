// Menangani pengiriman form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk langsung dikirim
    
    // Validasi Form
    if (validateForm()) {
        // Jika validasi berhasil, form dapat dikirim
        alert("Pulsa berhasil dibeli!");
        this.submit();  // Kirim form jika validasi berhasil
    }
});

// Fungsi untuk validasi form
function validateForm() {
    // Validasi Nomor HP
    var phone = document.getElementById("name").value;
    var phoneRegex = /^[0-9]{10,13}$/; // Hanya angka dengan panjang 10-13 digit
    if (!phone.match(phoneRegex)) {
        alert("Nomor HP tidak valid! Harap masukkan nomor yang terdiri dari 10-13 digit.");
        return false; // Jika tidak valid, form tidak dikirim
    }

    // Validasi Nominal Pulsa
    var nominal = document.getElementById("nominal").value;
    if (nominal === "") {
        alert("Harap pilih nominal pulsa.");
        return false; // Jika nominal tidak dipilih, form tidak dikirim
    }

    // Validasi Metode Pembayaran
    var paymentMethod = document.getElementById("interest").value;
    if (paymentMethod === "Select option" || paymentMethod === "") {
        alert("Harap pilih metode pembayaran.");
        return false; // Jika metode pembayaran tidak dipilih, form tidak dikirim
    }

    return true; // Semua validasi berhasil
}



let slideIndex = 0;

    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Ganti gambar setiap 3 detik
    }

    document.addEventListener("DOMContentLoaded", showSlides);
