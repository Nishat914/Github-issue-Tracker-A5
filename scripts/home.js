const loadAllIssue=()=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues`
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>displayAllIssue(data.data));
}

const displayAllIssue=(issues)=>{
    console.log(issues);

    const allIssue=document.getElementById('allIssue');
    console.log(allIssue);
    allIssue.innerHTML='';
    
    for(let issue of issues){
        const div=document.createElement('div');
        div.innerHTML=`
             <div class="space-y-3 rounded-t-lg p-4 bg-white shadow-md 
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
                <h2 class="text-[14px] font-semibold">Fix navigation menu on mobile devices</h2>
                <p class="text-[#64748B] text-[12px]">The navigation menu doesn't collapse properly on mobile devices...</p>
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
                <p class="text-[12px] text-[#64748B]">#1by john_doe</p>
                <p class="text-[12px] text-[#64748B]">1/15/2024</p>
            </div>
        `;
        allIssue.appendChild(div);
    }
}
loadAllIssue()