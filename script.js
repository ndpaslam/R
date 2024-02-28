document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk menambahkan angka 0 di depan angka satu digit
    function addZero(num) {
        return (num < 10 ? "0" : "") + num;
    }

    // Fungsi untuk memperbarui jam dan tanggal setiap detik
    function updateClock() {
        const now = new Date();
        const hours = addZero(now.getHours());
        const minutes = addZero(now.getMinutes());
        const seconds = addZero(now.getSeconds());
        const day = addZero(now.getDate());
        const month = addZero(now.getMonth() + 1); // Penambahan 1 karena indeks bulan dimulai dari 0
        const year = now.getFullYear();
        const dateString = day + "/" + month + "/" + year;
        const timeString = hours + ":" + minutes + ":" + seconds;
        document.getElementById("clock").textContent = timeString + " " + dateString;

        // Tambahkan timeout untuk menghitung waktu yang tersisa dalam detik pertama sejak halaman dimuat
        const remainingMilliseconds = 1000 - now.getMilliseconds();
        setTimeout(updateClock, remainingMilliseconds);
    }

    // Panggil fungsi updateClock() untuk pertama kali saat halaman dimuat
    updateClock();

    // Fungsi untuk menangani klik tombol "Hire Me"
    const hireMeButton = document.querySelector(".hire__me");
    hireMeButton.addEventListener("click", function() {
        // Gantikan nomor telepon dan pesan dengan informasi Anda
        const phoneNumber = "6285893523975"; // Ganti dengan nomor WhatsApp Anda
        const message = "Halo, saya tertarik untuk menyewa Anda sebagai pengembang web."; // Pesan yang ingin Anda tampilkan

        // Buat URL dengan format khusus untuk membuka WhatsApp dengan nomor dan pesan yang ditentukan
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Buka WhatsApp di tab atau aplikasi terpisah
        window.open(whatsappUrl, "_blank");
    });

    const backButton = document.querySelector(".back-button");
    
    // Handle click event on back button
    backButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default behavior of button click
        backButton.classList.add("clicked"); // Add 'clicked' class for animation
        setTimeout(function() {
            window.location.href = "index.html"; // Replace "index.html" with your home page URL
        }, 200); // Wait 200 milliseconds before redirecting to home page
    });
});
