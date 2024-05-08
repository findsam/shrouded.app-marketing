export default function form() {
  const form = document?.getElementById("form");

  if (!form) return;

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const err = document?.getElementById?.("error");
    err?.classList.remove("opacity-0");
    err?.classList.remove("-translate-y-1");
    (form as HTMLFormElement).reset();
    let timeout = setTimeout(() => {
      err?.classList.add("opacity-0");
      err?.classList.add("-translate-y-1");
    }, 4000);
    return () => clearTimeout(timeout);
  });
}
