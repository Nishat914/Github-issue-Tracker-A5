const loadAllIssue=()=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>displayAllIssue(data.data));
}
const updateCounter=(count)=>{
    const counter=document.getElementById('counter');
    counter.innerText='';
    counter.innerText=`${count} Issues`;
}

const displayAllIssue=(issues)=>{
    

    const allIssue=document.getElementById('allIssue');
    
    allIssue.innerHTML='';
    let count=0;
    for(let issue of issues){
        const div=document.createElement('div');
        div.innerHTML=`
             <div class="space-y-3 h-[100%] rounded-t-lg p-4 bg-white shadow-md 
             ${issue.priority==='low'?"border-t-4 border-purple-500 "
             :"border-t-4 border-green-500"}  ">
                <div class="flex justify-between items-center">
                    <img src="${
                        issue.priority === "low"
                        ? "./assets/Closed- Status .png"
                        : "./assets/Open-Status.png"}" 
                        alt="" class="block max-w-6 max-h-6">
                    
                    <span class="font-medium py-[6px] px-[25.5px] rounded-2xl text-[12px] uppercase
                        ${issue.priority === "high" 
                        ? "text-[#EF4444] bg-[#FEECEC]" 
                         : issue.priority === "medium" 
                        ? "text-[#D97706] bg-[#FFF8DB]" 
                        : "text-gray-500 bg-gray-200"}">${issue.priority}
                    </span>
                </div>
                <h2 class="text-[14px] font-semibold">${issue.title}</h2>
                <p class="text-[#64748B] text-[12px]">${issue.description}</p>
                <div class="flex flex-col md:flex-row items-center gap-1 justify-start">
                    <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px]">BUG</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap">HELP WANTED</span>
                    </div>
                </div>
                <hr class=" border  border-gray-300 ">
                <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
                <p class="text-[12px] text-[#64748B]">${issue.updatedAt}</p>
            </div>
        `;
        allIssue.appendChild(div);
        count++;
    }
    updateCounter(count);
}
loadAllIssue()

const loadOpenIssue=()=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>displayOpenIssue(data.data));
}
const displayOpenIssue=(Opens)=>{
    const allIssue=document.getElementById('allIssue');
    allIssue.innerHTML='';
    let count=0;
    for(let open of Opens){
        if(open.priority==='high' || open.priority==='medium'){
            const div=document.createElement('div');
        div.innerHTML=`
             <div class="space-y-3 h-[100%] rounded-t-lg p-4 bg-white shadow-md 
             ${open.priority==='low'?"border-t-4 border-purple-500 "
             :"border-t-4 border-green-500"}  ">
                <div class="flex justify-between items-center">
                    <img src="${
                        open.priority === "low"
                        ? "./assets/Closed- Status .png"
                        : "./assets/Open-Status.png"}" 
                        alt="" class="block max-w-6 max-h-6">
                    
                    <span class="font-medium py-[6px] px-[25.5px] rounded-2xl text-[12px] uppercase
                        ${open.priority === "high" 
                        ? "text-[#EF4444] bg-[#FEECEC]" 
                         : open.priority === "medium" 
                        ? "text-[#D97706] bg-[#FFF8DB]" 
                        : "text-gray-500 bg-gray-200"}">${open.priority}
                    </span>
                </div>
                <h2 class="text-[14px] font-semibold">${open.title}</h2>
                <p class="text-[#64748B] text-[12px]">${open.description}</p>
                <div class="flex flex-col md:flex-row items-center gap-1 justify-start">
                    <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px]">BUG</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap">HELP WANTED</span>
                    </div>
                </div>
                <hr class=" border  border-gray-300 ">
                <p class="text-[12px] text-[#64748B]">${open.createdAt}</p>
                <p class="text-[12px] text-[#64748B]">${open.updatedAt}</p>
            </div>
        `;
        allIssue.appendChild(div);
        count++;

        }
    }
    updateCounter(count);

}

const loadCloseIssue=()=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>displayCloseIssue(data.data));
}

const displayCloseIssue=(Closes)=>{
    const allIssue=document.getElementById('allIssue');
    allIssue.innerHTML='';
    let count=0;
    for(let close of Closes){
        if(close.priority==='low'){
            const div=document.createElement('div');
        div.innerHTML=`
             <div class="space-y-3 h-[100%] rounded-t-lg p-4 bg-white shadow-md 
             ${close.priority==='low'?"border-t-4 border-purple-500 "
             :"border-t-4 border-green-500"}  ">
                <div class="flex justify-between items-center">
                    <img src="${
                        close.priority === "low"
                        ? "./assets/Closed- Status .png"
                        : "./assets/Open-Status.png"}" 
                        alt="" class="block max-w-6 max-h-6">
                    
                    <span class="font-medium py-[6px] px-[25.5px] rounded-2xl text-[12px] uppercase
                        ${close.priority === "high" 
                        ? "text-[#EF4444] bg-[#FEECEC]" 
                         : close.priority === "medium" 
                        ? "text-[#D97706] bg-[#FFF8DB]" 
                        : "text-gray-500 bg-gray-200"}">${close.priority}
                    </span>
                </div>
                <h2 class="text-[14px] font-semibold">${close.title}</h2>
                <p class="text-[#64748B] text-[12px]">${close.description}</p>
                <div class="flex flex-col md:flex-row items-center gap-1 justify-start">
                    <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px]">BUG</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap">HELP WANTED</span>
                    </div>
                </div>
                <hr class=" border  border-gray-300 ">
                <p class="text-[12px] text-[#64748B]">${close.createdAt}</p>
                <p class="text-[12px] text-[#64748B]">${close.updatedAt}</p>
            </div>
        `;
        allIssue.appendChild(div);
        count++;

        }
    }
    updateCounter(count);

}