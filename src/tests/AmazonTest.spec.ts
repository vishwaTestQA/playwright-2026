import test, { expect } from "@playwright/test";

test('amazon test', async ({page})=>{
//    await page.goto("https://amazon.in")

//    await page.goto("http://127.0.0.1:5500/playwright-2026/index.html")
   await page.goto("G:/FrontEnd/JsPrograms/playwright-2026/index.html")


   

//    const logo = await page.locator('[aria-label="Amazon.in"]').getAttribute("aria-label")
//    expect(logo).toBe("Amazon.in")
     
//    const imgAlt = ["Deals", "WA", "Kids summer slam", "Pools", "Amazon fashion"]

//    await page.evaluate(() => {
//      let imageState = 0;
 
//     const ul = document.createElement('ul')
//     ul.classList.add('dummyul')
//       for(let i=0; i<5; i++){
//         const li = document.createElement('li')
//         li.classList.add('carousal')
//         li.textContent = `list ${i}`
//         li.style.width = "100px";
//         li.style.height = "20px";
//         li.style.display = "none";
//         li.style.border = "solid";
//         li.setAttribute("aria-hidden", "true")
//         ul.appendChild(li);
//       }
//     const rootEle = document.querySelector('#root') as HTMLElement
//     rootEle.appendChild(ul);

//       //make first element visible
//     let liEle = document.querySelector(`li:nth-child(${imageState+1})`) as HTMLElement;
//      console.log(liEle)
//      liEle.style.display = "block"
//      liEle.style.color = "red"
//      liEle.setAttribute("aria-hidden", "false")

//       const left = document.createElement('button') as HTMLElement
//       left.classList.add("left-btn")
//       left.textContent = "left"
     

//       const right = document.createElement('button') as HTMLElement
//       right.classList.add("right-btn")
//       right.textContent = "right"

//       rootEle.appendChild(left)
//       rootEle.appendChild(right)

//   const handleImageRight = () => {
//       if(imageState < 4 || imageState === 0){
//         imageState += 1
//       }else if(imageState === 4){
//         imageState = 0;
//       }
//       console.log("executing"+ imageState)
//       liEle.style.display = "none" 
//       liEle.setAttribute("aria-hidden", "true")
//       liEle = document.querySelector(`li:nth-child(${imageState+1})`) as HTMLElement;
//       liEle.setAttribute("aria-hidden", "false")
//       liEle.style.display = "block"
//       liEle.style.color = "red"
//   }

//     const handleImageLeft = () => {
//       if(imageState <= 4 && imageState > 0){
//         imageState -= 1
//       }else if(imageState === 0){
//         imageState = 4;
//       }
//       console.log("executing"+ imageState)
//       liEle.style.display = "none" 
//       liEle = document.querySelector(`li:nth-child(${imageState+1})`) as HTMLElement;
//       liEle.style.display = "block"
//       liEle.style.color = "red"
//   }

//     right.addEventListener('click', handleImageRight)
//     left.addEventListener('click', handleImageLeft)

//    })


const listArr = ["list 0", "list 1", "list 2", "list 3", "list 4"]

let i = 0
let highlightedIndex = 0
while(true){
   highlightedIndex = i % listArr.length; 
   if(i === listArr.length) break;
   let liText = await page.textContent(`li:nth-child(${i+1})`)
   console.log(i, i, liText)
   expect(liText).toBe(listArr[highlightedIndex])
   let isHidden = await page.getAttribute(`li:nth-child(${i+1})`, "aria-hidden")
   expect(isHidden).toBe("false")
   await page.click('button.right-btn');
   isHidden = await page.getAttribute(`li:nth-child(${i+1})`, "aria-hidden")
   expect(isHidden).toBe("true")
   i++;
}

   await page.pause()
   



  
   // for(let i=0; i<imgAlt.length; i++){
   //    page.locator(".a-carousel-card img")
   // }



})