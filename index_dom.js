import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj_digital.js";
import { shortcuts } from "./dom/teclado.js";
import { moveBall } from "./dom/teclado.js";
import countdown from "./dom/cuenta_regresiva.js";
import scrollBtn from "./dom/scroll_btn.js";
import darkTheme from "./dom/dark-theme.js";
import responsiveMedia from "./dom/objeto_responsive.js";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#clock", "#start-clock", "#stop-clock");
  alarm("assets/alarm-clock.mp3", "#start-alarm", "#stop-alarm");
  countdown("countdown", "Oct 30,2023 00:00:00", "Feliz Cumpleaños Emi");
  scrollBtn(".top-btn");
  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&ab_channel=jonmircha" target="_blank">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/GHD7Ffe7415xdAsC7" target="_blank">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167125041007!2d-58.3815704!3d-34.603738899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1677216665395!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".pelota", ".caja-negra");
});

darkTheme(".dark-theme-btn", "body-dark", ".caja-negra", "box-yellow");
