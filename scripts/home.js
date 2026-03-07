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
             <div class="space-y-3 p-4 bg-white shadow-md">
                <div class="flex justify-between items-center">
                    <img src="./assets/Open-Status.png" alt="" class="block max-w-6 max-h-6">
                    <span class="text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[25.5px] border border-none rounded-2xl text-[12px]">HIGH</span>
                </div>
                <h2 class="text-[14px] font-semibold">Fix navigation menu on mobile devices</h2>
                <p class="text-[#64748B] text-[12px]">The navigation menu doesn't collapse properly on mobile devices...</p>
                <div class="flex items-center gap-1 justify-start">
                    <div class="flex justify-center items-center text-[#EF4444] font-medium bg-[#FEECEC] py-[6px] px-[4px] border border-[#FECACA] rounded-2xl text-[12px]">
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