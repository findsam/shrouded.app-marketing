import "./style.css";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="h-full w-full flex gap-6 flex-col bg-orange-500 max-w-lg mx-auto min-h-5">
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
