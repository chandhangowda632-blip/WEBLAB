
/* ==============================
   PAGE NAVIGATION
============================== */

function showPage(pageId, button) {

    // Get all website sections
    const pages = document.querySelectorAll("section");

    // Hide all sections
    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Display selected section
    document.getElementById(pageId).classList.add("active");

    // Remove selected class from navigation buttons
    document.querySelectorAll("nav button").forEach(function(btn) {
        btn.classList.remove("selected");
    });

    // Highlight selected navigation button
    if (button) {
        button.classList.add("selected");
    } else {
        document.querySelectorAll("nav button").forEach(function(btn) {

            if (
                btn.textContent.trim() ===
                pageId.charAt(0).toUpperCase() + pageId.slice(1)
            ) {
                btn.classList.add("selected");
            }

        });
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ==============================
   WELCOME MESSAGE
============================== */

window.addEventListener("load", function() {
    alert("Welcome to Chandrakanth's Personal Website!");
});
