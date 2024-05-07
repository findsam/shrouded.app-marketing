import renderCheckmark from "./checkmark";

export function card(
  label: string,
  price: number,
  description: string,
  text: string,
  features: string[],
  style?: "primary"
) {
  let labelStyles =
    style === "primary"
      ? "text-[#3f755a] border-[#e0eee7] bg-[#e0eee7]"
      : "text-secondary border-grey-400 bg-grey-400";
  let borderStyles =
    style === "primary" ? "border-[#e0eee7]" : "border-grey-400";

  return `<div class="p-2 shadow-lg bg-grey-100 rounded-md md:w-[280px] h-max md:h-[390px] duration-100 hover:cursor-pointer ease-linear">
      <div class="${borderStyles} border bg-grey-100 h-full rounded-md relative py-4 px-3 flex items-start  md:items-center flex-col gap-1.5">
          <span class="text-xs absolute font-normal px-1.5 rounded-md -top-2.5 py-0.5 md:mx-auto leading-normal tracking-tight ${labelStyles}">
           ${label}
          </span>
          <p class="md:mx-auto md:text-center text-lg leading-tight tracking-tight text-primary font-semibold mt-2">
            ${text}
          </p>
          <p class="text-sm font-normal text-secondary leading-normal tracking-tight md:mx-auto md:text-center md:w-full max-w-xs">${description}</p>
          <p class="font-frank text-4xl leading-tight tracking-tight text-primary md:text-center">
            ${price}€
          </p>
          <ul class="border-t border-grey-400 md:w-[90%] w-full py-2 flex flex-col gap-1 justify-start items-start">
            ${features
              .map(
                (feature) =>
                  `<li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
                    "#3f755a"
                  )} ${feature}</li>`
              )
              .join("")}
            </ul>
          </div>
    </div>`;
}
