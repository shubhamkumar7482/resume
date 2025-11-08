  function showSection(id) {
            document.querySelectorAll("section, .main-section").forEach(el => el.style.display = "none");

            const target = document.getElementById(id);

            if (target) {
                // If it's the main section, use flex
                if (id === "main") {
                    target.style.display = "flex";
                } else {
                    target.style.display = "block";
                }
            } else {
                document.getElementById("main").style.display = "flex";
            }

            window.scrollTo(0, 0);
        }

        document.addEventListener("DOMContentLoaded", () => {
            showSection('main');
        });

        // Optional: Re-trigger display when returning from tab (visibility change)
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                const visibleSection = document.querySelector("section[style*='display: block'], .main-section[style*='display: flex']");
                if (!visibleSection) {
                    showSection('main');
                }
            }
        });




         const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });


        document.querySelectorAll('.content').forEach(section => {
            observer.observe(section);
        });