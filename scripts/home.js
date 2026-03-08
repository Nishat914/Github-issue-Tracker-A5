const updateCounter=(count)=>{
    const counter=document.getElementById('counter');
    counter.innerText='';
    counter.innerText=`${count} Issues`;
}

const setActiveBtn = (activeId) => {

    const allBtn = document.getElementById("allBtn");
    const openBtn = document.getElementById("openBtn");
    const closeBtn = document.getElementById("closeBtn");

    allBtn.classList.remove("btn-primary");
    openBtn.classList.remove("btn-primary");
    closeBtn.classList.remove("btn-primary");

    allBtn.classList.add("btn-outline","text-gray-400");
    openBtn.classList.add("btn-outline","text-gray-400");
    closeBtn.classList.add("btn-outline","text-gray-400");

    const activeBtn = document.getElementById(activeId);

    activeBtn.classList.remove("btn-outline","text-gray-400");
    activeBtn.classList.add("btn-primary");
}

const manageSpinner=(status)=>{
    if(status  == true){
        document.getElementById('spinner').classList.remove("hidden");
        document.getElementById('Container').classList.add("hidden");
    }else{
        document.getElementById('Container').classList.remove("hidden");
        document.getElementById('spinner').classList.add("hidden");
    }
}
const loadDetails= async(id)=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    const res= await fetch(url);
    const details= await res.json();
    displyDetails(details.data);
}
const displyDetails=(detail)=>{
    const detailContainer=document.getElementById('detailContainer');
    detailContainer.innerHTML=`
        <h2 class="font-bold text-2xl">${detail.title}</h2>
        <div class="flex justify-evenly items-center">
            <span class="font-medium py-[6px] px-[25.5px] rounded-2xl text-[12px] uppercase
            ${detail.status==='closed'?"text-purple-900 border border-purple-500 bg-purple-200"
             :"text-green-800 border border-green-500 bg-green-200"}">${detail.status}</span>
            <p class="text-[12px] text-gray-400"> Opened by <span class="text-[12px] text-gray-500 font-semibold">${detail.author}</span></p>
            <p class="text-[12px] text-gray-400">${detail.createdAt}</p>
        </div>
        <div class="flex gap-1">
            <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px]">${detail.labels[0] ? detail.labels[0] : "Not Found"}</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap">${detail.labels[1] ? detail.labels[1] : "Not Found"}</span>
                    </div>
        </div>
        <p class="text-[14px] text-gray-400">${detail.description}</p>
        <div class="flex justify-between items-center flex-row">
            <div>
                <p class="text-[12px] text-gray-400">Assignee:</p>
                <p class="text-[14px] text-gray-500 font-semibold">${detail.assignee}</p>
            </div>
            <div>
                <p class="text-[12px] text-gray-400">priority:</p>
                <span class="font-medium py-[6px] px-[25.5px] rounded-2xl text-[12px] uppercase
                        ${detail.priority === "high" 
                        ? "text-[#EF4444] bg-[#FEECEC]" 
                         : detail.priority === "medium" 
                        ? "text-[#D97706] bg-[#FFF8DB]" 
                        : "text-gray-500 bg-gray-200"}">${detail.priority}
                    </span>
            </div>
        </div>
    `;
    document.getElementById('my_modal').showModal();
}

const loadAllIssue=()=>{
    setActiveBtn("allBtn");
    manageSpinner(true);
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>displayAllIssue(data.data));
}


const displayAllIssue=(issues)=>{
    

    const allIssue=document.getElementById('allIssue');
    
    allIssue.innerHTML='';
    let count=0;
    for(let issue of issues){
        const div=document.createElement('div');
        div.innerHTML=`
             <div onclick='loadDetails(${issue.id})' class=" space-y-3 h-[100%] rounded-t-lg p-4 bg-white shadow-md 
             ${issue.status==='closed'?"border-t-4 border-purple-500 "
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
                <p class="text-[#64748B] text-[12px] ">${issue.description}</p>
                <div class="flex flex-col  items-center gap-1 justify-start">
                    <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px]">${issue.labels[0] ? issue.labels[0] : "Not Found"}</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap">${issue.labels[1] ? issue.labels[1] : "Not Found"}</span>
                    </div>
                </div>
                <hr class=" border  border-gray-300 ">
                <p class="text-[12px] text-[#64748B]">${issue.author}</p>
                <p class="text-[12px] text-[#64748B]">${issue.createdAt}</p>
            </div>
        `;
        allIssue.appendChild(div);
        count++;
    }
    manageSpinner(false);
    updateCounter(count);
}
loadAllIssue()

const loadOpenIssue=()=>{
    setActiveBtn("openBtn");
    manageSpinner(true);
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
        if(open.status==='open'){
            const div=document.createElement('div');
        div.innerHTML=`
             <div onclick='loadDetails(${open.id})' class="space-y-3 h-[100%] rounded-t-lg p-4 bg-white shadow-md 
             ${open.status==='closed'?"border-t-4 border-purple-500 "
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
                <div class="flex flex-col   items-center gap-1 justify-start">
                    <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px] uppercase">${open.labels[0] ? open.labels[0] : "Not Found"}</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap uppercase">${open.labels[1] ? open.labels[1] : "Not Found"}</span>
                    </div>
                </div>
                <hr class=" border  border-gray-300 ">
                <p class="text-[12px] text-[#64748B]">${open.author}</p>
                <p class="text-[12px] text-[#64748B]">${open.createdAt}</p>
            </div>
        `;
        allIssue.appendChild(div);
        count++;

        }
    }
    manageSpinner(false);
    updateCounter(count);

}

const loadCloseIssue=()=>{
    setActiveBtn("closeBtn");
    manageSpinner(true);
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
        if(close.status==='closed'){
            const div=document.createElement('div');
        div.innerHTML=`
             <div onclick='loadDetails(${close.id})' class="space-y-3 h-[100%] rounded-t-lg p-4 bg-white shadow-md 
             ${close.status==='closed'?"border-t-4 border-purple-500 "
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
                <div class="flex flex-col  items-center gap-1 justify-start">
                    <div class="flex  justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
                        <img src="./assets/BugDroid.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]" >
                        <span class="text-[11px]">${close.labels[0] ? close.labels[0] : "Not Found"}</span>
                    </div>
                    <div class="flex justify-center items-center text-[#D97706] font-medium bg-[#FFF8DB] py-[6px] px-[4px] border border-[#FDE68A] rounded-2xl text-[12px]">
                        <img src="./assets/Lifebuoy.png" alt="" class="block max-w-[0.75rem] max-h-[0.75rem]">
                        <span class="text-[11px] text-nowrap">${close.labels[1] ? close.labels[1] : "Not Found"}</span>
                    </div>
                </div>
                <hr class=" border  border-gray-300 ">
                <p class="text-[12px] text-[#64748B]">${close.author}</p>
                <p class="text-[12px] text-[#64748B]">${close.createdAt}</p>
            </div>
        `;
        allIssue.appendChild(div);
        count++;

        }
    }
    manageSpinner(false);
    updateCounter(count);

}