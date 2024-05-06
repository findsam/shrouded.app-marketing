import { card } from "./card";

export function renderCards() {
  let counter = 0;
  //   const setCounter = (count: number) => {
  //     counter = count;
  //     element.innerHTML = `count is ${counter}`;
  //   };
  //   element.addEventListener("click", () => setCounter(counter + 1));
  //   setCounter(0);

  return `<div id="cards" class="w-full flex gap-6 flex-col p-4 max-w-lg mx-auto min-h-5">${card()}</div>`;
}
