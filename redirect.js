document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a[href='/shqip'], a[href='/home']");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const path = link.getAttribute("href");
            if (path === "/al") {
                history.pushState(null, null, "/al");
                fetchContent("al.html");
            } else if (path === "/home") {
                history.pushState(null, null, "/home");
                fetchContent("index.html");
            }
        });
    });

    function fetchContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.body.innerHTML = html;
                // Re-attach event listeners
                document.querySelectorAll("a[href='/al'], a[href='/home']").forEach(link => {
                    link.addEventListener("click", function(event) {
                        event.preventDefault();
                        const path = link.getAttribute("href");
                        if (path === "/al") {
                            history.pushState(null, null, "/al");
                            fetchContent("al.html");
                        } else if (path === "/home") {
                            history.pushState(null, null, "/home");
                            fetchContent("index.html");
                        }
                    });
                });
            });
    }

    // Handle back/forward navigation
    window.addEventListener("popstate", function() {
        const path = location.pathname;
        if (path === "/shqip") {
            fetchContent("al.html");
        } else if (path === "/home") {
            fetchContent("index.html");
        }
    });

    // Initial load based on URL
    const initialPath = location.pathname;
    if (initialPath === "/shqip") {
        fetchContent("al.html");
    } else if (initialPath === "/home") {
        fetchContent("index.html");
    }
});
