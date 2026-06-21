import React from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import './bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./Pages/*.jsx", { eager: true });
    return pages[`./Pages/${name}.jsx`].default;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});