import "./style.css";
import { renderCards } from "./components/cards.ts";
import renderCheckmark from "./components/checkmark.ts";
import emailIcon from "./components/email.ts";
import form from "./components/form.ts";
import footer from "./components/footer.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<span class="opacity-80 pt-[40px] fixed top-0 w-full h-[40dvh] -z-10 pb-[70px] bg-contain [background-position-x:center] [background-position-y:top] bg-no-repeat bg-[image:radial-gradient(130%_100%_at_50%_0%,_#e0eee7_0%,_#fcf4e3_60%,_#f9f9f9_100%)]"></span>
  <div class="w-full flex gap-6 flex-col p-4 max-w-[460px] mx-auto min-h-5 items-center justify-center mt-20">
    <h1 class="text-left text-4xl leading-tight tracking-tight text-primary font-frank">
        A strong password is not enough anymore. Cover yourself with 
        <span class="font-bold bg-clip-text text-transparent fill-transparent bg-[size:100%_200%] bg-[position:0_0] animate-[bg-move_1s_linear_infinite] 
        bg-[image:radial-gradient(100%_100%_at_50%_100%,#50b9b1_0%,_#266447b8_100%)]">Shrouded</span>
    </h1>
      <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left mx-auto">
      Generate aliases for your personal email for every service you use. These aliases are forwarded straight to your inbox safeguarding your email from breaches, spam, and phishing.
      </p>

 <form class="w-full mr-auto max-w-[460px] relative" id="form">
                        <div class="flex border-grey-400 border bg-grey-100 w-full rounded-md">
                        <span class="my-auto ml-2">
                        ${emailIcon()}
                        </span>
                        <input
                        id="email"
                        type="email"
                          
                                placeholder="Enter your email..."
                                name="email"
                                class="outline-none bg-grey-100 py-2 px-2 rounded-l-md w-full
                                text-sm font-normal text-secondary leading-normal tracking-tight
                                placeholder:text-sm placeholder:font-normal placeholder:text-secondary placeholder:leading-normal placeholder:tracking-tight 
                                "
                            />
                            <button type="submit"  name="email" class=" bg-[#e0eee7] px-2 ml-auto rounded-md border-2 border-grey-100  whitespace-nowrap text-xs font-normal text-[#3f755a] leading-normal tracking-tight ">
                                Sign up free
                            </button>
                        </div>
                      <span id="error" class="will-change-transform duration-300 opacity-0 absolute -bottom-[1.55rem] -translate-y-1 left-0.5 text-xs font-normal text-[#bd6455] leading-normal tracking-tight text-left mx-auto">Sign up is currently disabled until further notice.</span>

                    </form>
                    </div
  </div>

    <div class="p-4 max-w-[460px] mx-auto flex items-center justify-center flex-col  border-grey-400 mt-0">
        <h1 class="text-left w-full text-xl font-light  leading-tight tracking-tight text-primary font-frank border-t border-border pt-6">
         How does Shrouded.app work?
        </h1>

      <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left mx-auto pb-6 border-b">
        We've built a three step formula to protect your online identity. Forget having to 
        remember emails for each service you use. </p>
        
        <div class="grid w-full mt-6">
          <div class="flex flex-row gap-4 w-full">
           <span class="bg-[#f2e2df] min-h-10 max-h-10 max-w-10 min-w-10  justify-center items-center flex text-center px-2 mr py-1.5 font-frank text-2xl leading-tight tracking-tight mr-auto rounded-md whitespace-nowrap font-normal text-[#bd6455] ">
              1
            </span>
          <div class="flex flex-col w-full">
          <p class="text-left text-md font-light  leading-tight tracking-tight text-primary font-frank">Add your primary email</p>
          <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left">This is where we forward emails.</p>
          </div>
          </div>
          <div class="flex border-grey-400 border bg-grey-100 w-full rounded-md mt-4">
        <span class="my-auto ml-2">
          ${emailIcon()}
          </span>
          <input
          disabled
          placeholder="Enter your email..."
          class="outline-none bg-grey-100 py-2 px-2 rounded-md w-full
          text-sm font-normal text-secondary leading-normal tracking-tight
          placeholder:text-sm placeholder:font-normal placeholder:text-secondary placeholder:leading-normal placeholder:tracking-tight 
          "/>
          </div>
        </div>

        <div class="grid w-full mt-6">
          <div class="flex flex-row gap-4 w-full">
           <span class="bg-[#fcf4e3] min-h-10 max-h-10 max-w-10 min-w-10 justify-center items-center flex text-center px-2 mr py-1.5 font-frank text-2xl leading-tight tracking-tight mr-auto rounded-md whitespace-nowrap font-normal text-[#b28f4b]">
              2
            </span>
          <div class="flex flex-col w-full">
          <p class="text-left text-md font-light leading-tight tracking-tight text-primary font-frank">Generate unique aliases</p>
          <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left">Randomise aliases or create your own custom alias.</p>
          </div>
          </div>
          <div class="flex border-grey-400 border bg-grey-100 w-full rounded-md mt-4 p-2">
               <ul class="w-full p-2 flex flex-col gap-1 justify-start items-start">
                              <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto lowercase">${renderCheckmark(
                                "#3f755a"
                              )}your-new-alias@shrouded.app</li>
                              <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto lowercase opacity-90">${renderCheckmark(
                                "#3f755a"
                              )}er3sjJrD2Vmz@shrouded.app</li>
                              <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto lowercase opacity-60">${renderCheckmark(
                                "#3f755a"
                              )}GiovanniDiLorenzo@shrouded.app</li>
                              <li class="text-sm font-normal text-secondary leading-normal tracking-tight text-left flex gap-2 items-center mr-auto lowercase opacity-30">${renderCheckmark(
                                "#3f755a"
                              )} mzkm48bdmyec@shrouded.app</li>

               </ul>     
          </div>
        </div>

        <div class="grid w-full mt-6 border-b pb-8 border-border ">
          <div class="flex flex-row gap-4 w-full">
           <span class="bg-[#e0eee7] min-h-10 max-h-10 max-w-10 min-w-10  justify-center items-center flex text-center px-2 mr py-1.5 font-frank text-2xl leading-tight tracking-tight mr-auto rounded-md whitespace-nowrap font-normal text-[#3f755a]">
              3
            </span>
          <div class="flex flex-col w-full">
          <p class="text-left text-md font-light  leading-tight tracking-tight text-primary font-frank">Register using your new aliases</p>
          <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left">Your identity remains concealed and protected.</p>
          </div>
          </div>
          <div class="flex flex-col gap-2 border-grey-400 border bg-grey-100 w-full rounded-md mt-4 p-4">
                <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left mx-auto">
        Any email forwarded through your aliases will be directly sent to your inbox. We do not retain any details of your emails under any circumstances.
          <a href="https://notion.so" class="bg-grey-400 hover:cursor-pointer mr-auto rounded-md border-grey-100  whitespace-nowrap text-xs font-normal text-secondary  px-1.5 py-0.5 leading-normal tracking-tight">
              Read our privacy memo!
            </a>
          </p>
          </div>
        </div>
      </div>

  <div class="w-full flex flex-col p-4 max-w-[460px] mx-auto min-h-5 items-center justify-center">
      <h1 class="text-left w-full text-xl font-light  leading-tight tracking-tight text-primary font-frank">
    Flexible pricing as your online presence scales.
      </h1>
      
      <p class="text-sm font-normal text-secondary leading-normal tracking-tight text-left mx-auto pb-6 border-b">
      
Privacy is a fundamental human right, we've introduced a free plan to ensure that everyone can benefit from Shrouded.</p>

  </div>
  ${renderCards()}
   <div class="w-full flex gap-6 flex-col p-4 max-w-[460px] mx-auto min-h-5 items-center justify-center mt-0">
   ${footer()}
   </div>
  `;

form();
