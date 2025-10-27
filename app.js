document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Sayfa yenilenmesini engelle

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {
        alert("Giriş başarılı! 👏");
        // Burada başka sayfaya yönlendirebilirsin:
        // window.location.href = "anasayfa.html";
    } else {
        alert("Kullanıcı adı veya şifre hatalı! ❌");
    }
});
console.log("Kodhan anasayfa yüklendi ✅");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// Giriş ↔ Kayıt geçişi
showRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});

// Giriş işlemi
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "1234") {
    alert("Giriş başarılı!");
    window.location.href = "index.html"; // Anasayfaya yönlendirme
  } else {
    alert("Kullanıcı adı veya şifre hatalı!");
  }
});

// Kayıt işlemi
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUsername = document.getElementById("newUsername").value.trim();
  const newEmail = document.getElementById("newEmail").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();

  if (newUsername && newEmail && newPassword) {
    alert("Kayıt başarılı! Artık giriş yapabilirsin.");
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  } else {
    alert("Lütfen tüm alanları doldurun!");
  }
});

// İletişim formu mesajı
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.");
    contactForm.reset();
  });
}

