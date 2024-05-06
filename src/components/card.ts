import renderCheckmark from "./checkmark";

export function card() {
  return `<div class="p-2 shadow-lg bg-grey-100 rounded-md w-[280px] h-[360px]">
      <div class="border-[#e0eee7] border bg-grey-100 h-full rounded-md relative py-4 px-3 flex items-center flex-col gap-1.5">
          <span class="bg-[#e0eee7] text-xs absolute font-normal text-[#3f755a] px-1.5 rounded-md -top-2.5 py-0.5 mx-auto leading-normal tracking-tight">
            Great value
          </span>
          <p class="text-left text-lg leading-tight tracking-tight text-primary font-semibold mt-2">
            Premium
          </p>
          <p class="text-sm font-normal text-secondary leading-normal tracking-tight mx-auto text-center">Billed monthly great for individuals who use multiple online services.</p>
          <p class="font-frank text-4xl leading-tight tracking-tight text-primary text-center ">
            3€
          </p>
          <ul class="border-t border-grey-400 w-[90%] py-2 flex flex-col gap-1 justify-start items-start">
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
              "#3f755a"
            )} Create Unlimited Aliases</li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
              "#3f755a"
            )} Edit Unlimited Aliases</li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
              "#3f755a"
            )} Chrome Extension</li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
              "#3f755a"
            )}
             Single sign-on</li>
             <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
               "#3f755a"
             )} 24/7 Support</li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
              "#3f755a"
            )} Spam filter</li>
               <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">${renderCheckmark(
                 "#3f755a"
               )} Destination control</li>
          </ul>
          </div>
    </div>`;
}
