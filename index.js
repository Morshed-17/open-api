const loadContent = async (isShowAll) => {
    const response = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await response.json()
    let tools = data.data.tools
    // display tools
    const toolsContainer = document.getElementById('tools-container')
    toolsContainer.innerHTML = '' 
const displayTools = tools => tools.forEach(tool => {
    console.log(tool);
    const div = document.createElement('div')
    div.innerHTML= `
    <div class="border-[1px] border-[rgba(17, 17, 17, 0.10)] rounded-lg p-7 ">
                    <img class="rounded-lg w-full h-[230px]" src="${tool.image}" alt="Image uavailable">
                    <h3 class="text-2xl font-semibold my-6">Features</h3>
                    <ul class="list-decimal list-inside">
                        <li>${tool.features[0]}</li>
                        <li>${tool.features[1]}</li>
                        <li>${tool.features[2]}</li>
                        
                    </ul>
                    <div class="bg-[rgba(17, 17, 17, 0.10)] h-[2px] my-6"><hr></div>
                    <div class="flex items-center justify-between">
                        <div>
                            <h4 class="text-xl font-semibold">${tool.name}</h4>
                            <h4 class="text-sm my-4">📅 ${tool.published_in}</h4>
                        </div>
                        <button class="btn btn-error text-white">
                            Learn More
                        </button>
                    </div>
                </div>
    
    `
    toolsContainer.appendChild(div)
})
const showAllContainer = document.getElementById('show-all-container')
if(tools.length > 6 && !isShowAll){
    showAllContainer.classList.remove('hidden')
}else{
    showAllContainer.classList.add('hidden')
}
if(!isShowAll){
    tools = tools.slice(0, 6)
}

displayTools(tools)


}



const showAllHandle = () => {
    loadContent(true)
}

loadContent()