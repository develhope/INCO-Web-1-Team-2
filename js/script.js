document.addEventListener("DOMContentLoaded", () => {
      // Scroll navbar
      const navWrap = document.getElementById("navWrap");
      const onScroll = () => {
        document.body.classList.toggle("nav-solid", window.scrollY > 10);
      };
      window.addEventListener("scroll", onScroll);
      onScroll();

      // Drawer
      const openDrawerBtn = document.getElementById("openDrawer");
      const closeDrawerBtn = document.getElementById("closeDrawer");
      const overlay = document.getElementById("overlay");
      const drawer = document.getElementById("drawer");

      const setDrawer = (open) => {
        document.body.classList.toggle("drawer-open", open);
        drawer.setAttribute("aria-hidden", open ? "false" : "true");

        // prevent background scrolling when open
        document.body.style.overflow = open ? "hidden" : "";
      };

      openDrawerBtn.addEventListener("click", () => setDrawer(true));
      closeDrawerBtn.addEventListener("click", () => setDrawer(false));
      overlay.addEventListener("click", () => setDrawer(false));

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setDrawer(false);
      });
    });