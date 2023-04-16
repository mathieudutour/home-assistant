window.addEventListener("load", () => {
  const unify = querySelectorDeep("a[role='option'][href='/unifi']");
  unify.setAttribute(
    "href",
    "https://homeassistant.local:8443/manage/default/dashboard"
  );
  unify.setAttribute("target", "_blank");

  const vacuum = querySelectorDeep("a[role='option'][href='/vacuum']");
  vacuum.setAttribute("href", "http://valetudo-lonelygleefulmink.local/");
  vacuum.setAttribute("target", "_blank");
});
