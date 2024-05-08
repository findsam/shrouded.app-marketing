export default function footer() {
  return `
    <div class="w-full grid py-4 max-w-[460px] mb-12 mx-auto min-h-5 items-start justify-center border-t border-b grid-cols-4 border-grey-400">     
        <ul class="w-full py-2 flex flex-col gap-1 justify-start items-start col-span-2">
              <li class="text-sm leading-normal tracking-tight text-left flex gap-2 items-center text-primary font-semibold  mr-auto">Company
            </li>
      <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto hover:cursor-pointer hover:text-primary duration-150"><a href="https://notion.so" target="_blank">Terms and conditions</a>
          </li>
            </li>
            <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto hover:cursor-pointer hover:text-primary duration-150"><a href="https://notion.so" target="_blank">Cookie policy</a>
          </li>
      <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto hover:cursor-pointer hover:text-primary duration-150"><a href="https://notion.so" target="_blank">Privacy policy</a>
          </li>

                <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto hover:cursor-pointer hover:text-primary duration-150"><a href="https://notion.so" target="_blank">Privacy promise</a>
          </li>
        </ul>
 <ul class="w-full flex flex-col gap-1 justify-start items-start col-span-2 max-w-14 ml-auto">
                <li class="text-sm  leading-normal tracking-tight text-left flex gap-2 items-center mr-auto  text-primary font-semibold ">Socials
            </li>
      <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto hover:cursor-pointer hover:text-primary duration-150">
      <a href="https://twitter.com" target="_blank">Twitter</a>
          </li>
           <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto hover:cursor-pointer hover:text-primary duration-150"><a href="https://linkedin.com" target="_blank">LinkedIn</a>
          </li>
          </ul>

          </div>
        `;
}
