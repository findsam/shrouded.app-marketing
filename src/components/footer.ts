export default function footer() {
  return `
    <div class="w-full grid py-4 max-w-[460px] mx-auto min-h-5 items-start justify-center mb-12 border-t border-b grid-cols-4 border-grey-400">     
        <ul class="w-full py-2 flex flex-col gap-1 justify-start items-start col-span-2">
              <li class="text-sm leading-normal tracking-tight text-left flex gap-2 items-center text-primary font-semibold  mr-auto">Company
            </li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">©Shrouded.app @2024
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">
            Terms and Conditions</li>
            </li>
                <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">Cookie Policy
            </li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">
           Privacy Policy</li>

        <li class="text-sm  leading-normal tracking-tight text-left flex gap-2 items-center mr-auto  text-primary font-semibold mt-4">Socials
            </li>
         <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">Twitter</li>
           <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">LinkedIn</li>
        </ul>
        <ul class="w-full py-2 flex flex-col gap-1 justify-start items-start col-span-2 max-w-32 ml-auto">
            <li class="text-sm  leading-normal tracking-tight text-left flex gap-2 items-center mr-auto  text-primary font-semibold ">Built with love in
            </li>
        <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">Italy</li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto">Switzerland</li>
        <ul>
        </div>
        `;
}
