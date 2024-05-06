import "./style.css";
import { setupCounter } from "./counter.ts";
import { renderCards } from "./components/cards.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="w-full flex gap-6 flex-col p-4 max-w-lg mx-auto min-h-5">
    <h1 class="text-left text-4xl leading-tight tracking-tight text-primary font-frank">
        A strong password is not enough anymore. Cover yourself with 
        <span class="font-bold bg-clip-text text-transparent fill-transparent bg-[size:100%_200%] bg-[position:0_0] animate-[bg-move_1s_linear_infinite] 
        bg-[image:radial-gradient(100%_100%_at_50%_100%,#50b9b1_0%,_#266447b8_100%)]">Shrouded</span>
    </h1>

      <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left mx-auto">
        We generate aliases for your personal email for each service you use.
        Forwarded directly to your inbox without exposing your real email to
        breaches, spam, and phishing.
      </p>

       <form class="w-full mr-auto max-w-[430px]">
          <div class="flex border-grey-300 border bg-grey-100 w-full rounded-md">
            <input
              placeholder="Your email..."
              class="outline-none bg-grey-100 py-2 px-2 rounded-l-md w-full
              text-sm font-normal text-secondary leading-normal tracking-tight
              placeholder:text-sm placeholder:font-normal placeholder:text-secondary placeholder:leading-normal placeholder:tracking-tight 
              "
            />
            <button class="bg-[#e0eee7] px-2 ml-auto rounded-md border-2 border-grey-100  whitespace-nowrap text-xs font-normal text-[#3f755a] leading-normal tracking-tight ">
              Sign up free
            </button>
          </div>
        </form>
  </div>
  ${renderCards()}
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
