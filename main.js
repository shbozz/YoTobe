import './style.css'

let state = 0;

const button = document.getElementById('button');

button.onclick = () => {
  state (state + 1);
  button.innerHTML = state;
}

//javascript:let urlQueue=[],backButton=document.createElement("button");backButton.style.width="25px",backButton.innerHTML="<";let urlBox=document.createElement("input");urlBox.type="text",urlBox.style.width="480px";let goButton1=document.createElement("button");goButton1.innerHTML="Load Page by iFrame";let goButton2=document.createElement("button");goButton2.innerHTML="Load Page by Proxy";let ytButton=document.createElement("button");ytButton.innerHTML="Load YouTube";let iframe=document.createElement("iframe");iframe.src="https://www.bing.com",iframe.width=window.innerWidth,iframe.height=window.innerHeight,goButton1.addEventListener("click",(()=>{0!=urlBox.value.length&&urlBox.value.startsWith("http")&&(iframe.src=urlBox.value.toLowerCase(),urlQueue.push(urlBox.value.toLowerCase()))})),goButton2.addEventListener("click",(()=>{iframe.src="https://www.proxysite.com",urlQueue.push("https://www.proxysite.com")})),ytButton.addEventListener("click",(()=>{iframe.src="https://piped.kavin.rocks/",urlQueue.push("https://piped.kavin.rocks/")})),backButton.addEventListener("click",(()=>{urlQueue.length>1&&(urlQueue.pop(),iframe.src=urlQueue.at(-1))})),document.body.appendChild(backButton),document.body.appendChild(urlBox),document.body.appendChild(goButton1),document.body.appendChild(goButton2),document.body.appendChild(ytButton),document.body.appendChild(iframe); 
