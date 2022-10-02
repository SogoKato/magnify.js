
// ------------------------------------------
// Magnify.js
// Hover to magnify.
// Copyright (c) 2022 Sogo Kato (@SogoKato)
// MIT license
// ------------------------------------------

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Magnify = factory();
  }
}(typeof window !== "undefined" ? window : global, function () {
  const Magnify = function (el, options) {

    const self = Object.create(Magnify.prototype);

    // Set options.
    self.options = {
      scale: 1.5,
      className: "magnified",
    };
    if (options) {
      Object.keys(options).forEach((key) => {
        self.options[key] = options[key];
      });
    }

    // Find target elements. Defaults to `.magnify`.
    if (!el) {
      el = ".magnify";
    }
    const elements = typeof el === "string" ? document.querySelectorAll(el) : [el];
    if (elements.length > 0) {
      self.elements = elements;
    } else {
      console.warn("Magnify.js: Your query selector finds no elements.");
    }

    const onMouseEnter = (e /* :MouseEvent */ ) => {
      const target = e.target;
      // Ignore if set already.
      if (target.classList.contains(self.options.className)) return;
      // Apply `transform: scale(X)`. Use the value of data-magnify-scale if it exists.
      const scale = target.dataset.magnifyScale ? target.dataset.magnifyScale : self.options.scale;
      target.style.transform = `${target.style.transform} scale(${scale})`;
      // Add a class name to mark as applied.
      target.classList.add(self.options.className);
    }

    const onMouseLeave = (e /* :MouseEvent */ ) => {
      const target = e.target;
      // Ignore if not set.
      if (!target.classList.contains(self.options.className)) return;
      // Remove `transform : scale(X)`.
      target.style.transform = target.style.transform.replace(/scale(.+)/g, "");
      target.classList.remove(self.options.className);
    }

    // Set event listeners to each element.
    for (let i=0; i<self.elements.length; i++) {
      const element = self.elements[i];
      element.addEventListener("mouseenter", onMouseEnter);
      element.addEventListener("mouseleave", onMouseLeave);
    }

    self.destroy = () => {
      for (let i=0; i<self.elements.length; i++) {
        const element = self.elements[i];
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
      } 
    };

    return self;
  };
  return Magnify;
}));
