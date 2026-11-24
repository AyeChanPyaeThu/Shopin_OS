export function flyToCart(imgEl, cartEl, onComplete) {
  let done = false; // 👈 guard

  const imgRect = imgEl.getBoundingClientRect();
  const cartRect = cartEl.getBoundingClientRect();

  const clone = imgEl.cloneNode(true);
  clone.style.position = "fixed";
  clone.style.left = imgRect.left + "px";
  clone.style.top = imgRect.top + "px";
  clone.style.width = imgRect.width + "px";
  clone.style.height = imgRect.height + "px";
  clone.style.transition = "all 0.7s ease-in-out";
  clone.style.zIndex = 9999;

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    const x =
      cartRect.left + cartRect.width / 2 - imgRect.left - imgRect.width / 2;
    const y =
      cartRect.top + cartRect.height / 2 - imgRect.top - imgRect.height / 2;

    clone.style.transform = `translate(${x}px, ${y}px) scale(0.2)`;
    clone.style.opacity = "0.5";
  });

  clone.addEventListener("transitionend", () => {
    if (done) return; // 👈 prevent double call
    done = true;

    clone.remove();
    onComplete && onComplete();
  });
}
