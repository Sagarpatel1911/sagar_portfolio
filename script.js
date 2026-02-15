
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    // Click event for opening/closing menu
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        
        // Optional: Hamburger ko 'X' mein badalne ke liye
        hamburger.classList.toggle("is-active");
    });

    // Links click hote hi menu band ho jaye
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        navMenu.classList.remove("active");
    }));