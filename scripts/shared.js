/**
 * TalBri Shared Components
 * Injects header, footer, team, and contact sections into pages.
 * Expects <body data-base-path="./" data-page="index"> or similar.
 */
(function () {
    "use strict";

    const body = document.body;
    const basePath = body.dataset.basePath || "./";
    const currentPage = body.dataset.page || "index";

    function resolve(path) {
        return basePath + path;
    }

    /* ─────────────── Header / Navigation ─────────────── */
    const navItems = [
        { id: "index", label: "Hlavná stránka", href: "index.html" },
        { id: "nasa-misia", label: "Naša misia", href: "nasa-misia/index.html" },
        { id: "pre-mladych", label: "Pre mladých", href: "pre-mladych/index.html" },
        { id: "pre-firmy", label: "Pre firmy", href: "pre-firmy/index.html" },
        { id: "pre-organizacie", label: "Pre organizácie", href: "pre-organizacie/index.html" },
    ];

    function buildHeader() {
        const desktopLinks = navItems
            .map((item) => {
                const isActive = item.id === currentPage;
                const cls = isActive
                    ? "text-primary font-semibold"
                    : "text-secondary/70 hover:text-primary transition";
                return `<li><a href="${resolve(item.href)}" class="${cls}">${item.label}</a></li>`;
            })
            .join("");

        const mobileLinks = navItems
            .map((item, idx) => {
                const isActive = item.id === currentPage;
                const cls = isActive
                    ? "block text-primary font-semibold py-2"
                    : "block text-secondary/70 hover:text-primary transition py-2";
                const borderClass =
                    idx === navItems.length - 1 ? "" : " border-b border-talbri-peach/30";
                return `<li><a href="${resolve(item.href)}" class="${cls}${borderClass}">${item.label}</a></li>`;
            })
            .join("");

        return `
<header class="bg-white shadow-sm py-3 md:py-4 sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <a href="${resolve("index.html")}" class="flex items-center">
                    <img src="${resolve("photos/logo/TalBri_main_black.svg")}" alt="TalBri" class="h-8 md:h-10 w-auto" />
                </a>
            </div>
            <nav class="hidden md:block">
                <ul class="flex space-x-6 lg:space-x-8">
                    ${desktopLinks}
                </ul>
            </nav>
            <button id="mobile-menu-button" class="md:hidden text-secondary/70 focus:outline-none" aria-expanded="false">
                <i data-feather="menu" class="w-6 h-6"></i>
            </button>
        </div>
        <nav id="mobile-menu" class="hidden md:hidden mt-4 pb-4">
            <ul class="flex flex-col space-y-3">
                ${mobileLinks}
            </ul>
        </nav>
    </div>
</header>
        `.trim();
    }

    /* ─────────────── Footer ─────────────── */
    function buildFooter() {
        return `
<footer class="bg-primary text-white py-12">
    <div class="w-full px-4 sm:px-6 lg:px-10">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
            <div class="text-center md:text-left">
                <a href="${resolve("index.html")}">
                    <img src="${resolve("photos/logo/TalBri_main_white.svg")}" alt="TalBri" class="h-10 md:h-12 w-auto mx-auto md:mx-0" />
                </a>
                <p class="mt-2 text-white/60">Spájame slovenský talent s príležitosťami.</p>
            </div>
            <div class="text-center md:text-left">
                <h4 class="text-lg font-semibold text-white">Kontakt</h4>
                <div class="mt-3 flex flex-col items-center gap-3 md:items-start">
                    <a href="mailto:info@talbri.eu" class="inline-flex items-center gap-2 text-white/60 hover:text-white transition break-all" aria-label="Napíšte nám email">
                        <i data-feather="mail" class="w-5 h-5"></i>
                        <span>info@talbri.eu</span>
                    </a>
                    <a href="https://www.linkedin.com/company/talbri/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-white/60 hover:text-white transition" aria-label="TalBri na LinkedIn">
                        <i data-feather="linkedin" class="w-5 h-5"></i>
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>© ${new Date().getFullYear()} TalBri. Všetky práva vyhradené.</p>
        </div>
    </div>
</footer>
        `.trim();
    }

    /* ─────────────── Team Section ─────────────── */
    const teamMembers = [
        {
            name: "Karin Popovičová",
            photo: "photos/karin_popovicova.jpeg",
            linkedin: "https://www.linkedin.com/in/karin-popovicova/",
        },
        {
            name: "Alexandra Behranová",
            photo: "photos/alexandra_behranova.jpeg",
            linkedin: "https://www.linkedin.com/in/sasa-behranova/",
        },
        {
            name: "Tomáš Krebs",
            photo: "photos/tomas_krebs.jpeg",
            linkedin: "https://www.linkedin.com/in/tomikrebs/",
        },
        {
            name: "Barbora Polovka Szepeová",
            photo: "photos/barbora_polovka.png",
            linkedin: "https://www.linkedin.com/in/barbora-polovka-47b04ab3/",
        },
        {
            name: "Soňa Sochová",
            photo: "photos/sona_sochova.jpeg",
            linkedin: "https://www.linkedin.com/in/soniasochova/",
        },
    ];

    function buildTeamSection() {
        const cards = teamMembers
            .map(
                (m) => `
<div class="team-card">
    <div class="mb-4 relative inline-block">
        <img src="${resolve(m.photo)}" alt="${m.name}" class="w-32 h-32 mx-auto object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <h3 class="text-xl font-bold mb-2 text-primary">${m.name}</h3>
    <a href="${m.linkedin}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-secondary hover:text-primary transition">
        <i data-feather="linkedin" class="w-5 h-5"></i>
        <span class="text-sm">LinkedIn</span>
    </a>
</div>
            `
            )
            .join("");

        return `
<section id="team" class="py-16 bg-talbri-bg">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Náš tím</h2>
            <div class="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p class="text-xl text-secondary max-w-3xl mx-auto">Ľudia, ktorí stoja za TalBri.</p>
        </div>
        <div class="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
            ${cards}
        </div>
    </div>
</section>
        `.trim();
    }

    /* ─────────────── Contact Section ─────────────── */
    function buildContactSection() {
        return `
<section id="contact" class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-primary">Kontakt</h2>
            <div class="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        <div class="max-w-2xl mx-auto text-center">
            <div class="content-box hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-6">
                    <i data-feather="mail" class="w-8 h-8 text-primary"></i>
                </div>
                <h3 class="text-xl font-bold mb-4 text-primary">Kontaktujte nás</h3>
                <p class="text-secondary mb-6">Máte otázky alebo chcete s nami spolupracovať? Radi sa s vami spojíme.</p>
                <a href="mailto:info@talbri.eu" class="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition">
                    info@talbri.eu
                    <i data-feather="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </div>
</section>
        `.trim();
    }

    /* ─────────────── Injection ─────────────── */
    function inject(id, html) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    }

    inject("header-root", buildHeader());
    inject("footer-root", buildFooter());
    inject("team-root", buildTeamSection());
    inject("contact-root", buildContactSection());

    /* ─────────────── Feather Icons ─────────────── */
    if (typeof feather !== "undefined") {
        feather.replace();
    }

    /* ─────────────── Mobile Menu ─────────────── */
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenuButton && mobileMenu) {
        const setMobileMenuIcon = (iconName) => {
            mobileMenuButton.innerHTML = `<i data-feather="${iconName}" class="w-6 h-6"></i>`;
            if (typeof feather !== "undefined") feather.replace();
        };

        setMobileMenuIcon("menu");
        mobileMenuButton.setAttribute("aria-expanded", "false");

        mobileMenuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
            const isHidden = mobileMenu.classList.contains("hidden");
            setMobileMenuIcon(isHidden ? "menu" : "x");
            this.setAttribute("aria-expanded", String(!isHidden));
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", function () {
                mobileMenu.classList.add("hidden");
                setMobileMenuIcon("menu");
                mobileMenuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    /* ─────────────── Smooth Scroll ─────────────── */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
})();
