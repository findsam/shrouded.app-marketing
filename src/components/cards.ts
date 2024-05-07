import { card } from "./card";
// <a href="https://dashboard.shrouded.app/pricing?ref=landing&type=free"
//<a href="https://dashboard.shrouded.app/pricing?ref=landing&type=premium"
//<a href="https://dashboard.shrouded.app/pricing?ref=landing&type=unlimited"
export function renderCards() {
  return `<div id="cards" class="relative w-full gap-6 items-center justify-center p-4 md:max-w-4xl max-w-[460px] grid md:grid-cols-3 grid-cols-1 mx-auto min-h-5 md:mt-12 mb-28">
    <a href="#" class="md:-rotate-[8deg] md:translate-y-6 md:z-0 md:relative md:translate-x-8">${card(
      "Free",
      0,
      "Great for individuals who have minimal online presence.",
      "Free",
      [
        "Destination control",
        "Create 2 saliases",
        "Single sign-on",
        "Email support",
      ]
    )}</a>
     <a href="#" class="md:-rotate-[1deg] md:-translate-y-12 md:z-1 md:relative">${card(
       "Great value",
       3.99,
       "Billed monthly great for individuals who use multiple online services.",
       "Premium",
       [
         "Create unlimited aliases",
         "Update unlimited aliases",
         "Chrome Extension",
         "Destination control",
         "Cancel anytime",
         "Single sign-on",
         "24/7 support",
         "Spam filter",
       ],
       "primary"
     )}</a>
     <a href="#"  class="md:rotate-[12deg] md:z-2 md:relative md:translate-y-2 md:-translate-x-10">${card(
       "Single payment",
       49.99,
       "Single payment great for families who use multiple online services.",
       "Unlimited access",
       [
         "Create unlimited aliases",
         "Update unlimited aliases",
         "Destination control",
         "Chrome extension",
         "Lifetime access",
         "Single sign-on",
         "24/7 support",
         "Spam filter",
       ]
     )}</a>
  </div>`;
}
