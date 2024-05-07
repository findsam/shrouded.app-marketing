import { card } from "./card";

export function renderCards() {
  return `
  
  <div id="cards" class="relative w-full gap-6 items-center justify-center p-4 max-w-4xl grid grid-cols-3 mx-auto min-h-5 mt-12 mb-32">
    <div class="-rotate-[8deg] translate-y-6 z-0 relative translate-x-8">${card(
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
    )}</div>
    <div class="-rotate-[1deg] -translate-y-12 z-1 relative">${card(
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
    )}</div>
    <div class="rotate-[12deg] z-2 relative translate-y-2 -translate-x-10">${card(
      "One time payment",
      49.99,
      "One time payment great for families who use multiple online services.",
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
    )}</div>
  </div>`;
}
