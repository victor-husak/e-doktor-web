import { useEffect } from "react";

export const useHomeDomainHeader = () => {
  useEffect(() => {
    const layer = {
      el: document.getElementById("layer-back"),
      speed: 0.15,
      zoomSpeed: 0.0002,
    };

    let latestScrollY = 0;
    let currentScrollY = 0;
    let mouseY = 0;

    window.addEventListener("scroll", () => {
      latestScrollY = window.scrollY;

      requestAnimationFrame(animate);
    });

    function animate() {
      currentScrollY += (latestScrollY - currentScrollY) * 0.1;

      // const moveY = currentScrollY * layer.speed + mouseY;
      const scale = 1 + currentScrollY * layer.zoomSpeed;

      if (layer.el) layer.el.style.transform = `scale(${scale})`;
    }
  }, []);

  return {};
};
