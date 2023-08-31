const loadContent = async (isShowAll) => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/ai/tools"
  );
  const data = await response.json();
  let tools = data.data.tools;
  // display tools
  const toolsContainer = document.getElementById("tools-container");
  toolsContainer.innerHTML = "";
  const displayTools = (tools) =>
    tools.forEach((tool) => {
      // console.log(tool);
      const div = document.createElement("div");
      div.innerHTML = `
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
                        <button onclick="handleModal('${tool.id}')" class="btn btn-error text-white">
                            Learn More
                        </button>
                    </div>
                </div>
    
    `;
      toolsContainer.appendChild(div);
    });
  const showAllContainer = document.getElementById("show-all-container");
  if (tools.length > 6 && !isShowAll) {
    showAllContainer.classList.remove("hidden");
  } else {
    showAllContainer.classList.add("hidden");
  }
  if (!isShowAll) {
    tools = tools.slice(0, 6);
  }

  displayTools(tools);
};

const showAllHandle = () => {
  loadContent(true);
};
const handleModal = async (tool) =>  {
    const response = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${tool}`)
    const data = await response.json()
    const cardInfo = data.data
    console.log(cardInfo);
    const modalContainer = document.getElementById('modal-container')
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- Open the modal using ID.showModal() method -->
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box max-w-[1250px] p-32">
  <div class="max-w-[1250px] mx-auto grid grid-cols-2 grid-rows-1 gap-6">
                    <!-- left col -->
                    <div class="p-7 rounded-lg border-[1px] border-[#EB5757] bg-gray-50">
                        <h3 class="text-2xl font-semibold max-w-md">
                            ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate
                            human
                            conversation.
                        </h3>
                        <div class=" text-center rounded-lg grid grid-cols-3 gap-6 mt-6">
                            <div class="bg-white py-5 px-6">
                                <h4 class="text-base font-bold text-[#03A30A]">$10/month
                                    Basic</h4>
                            </div>
                            <div class="bg-white py-5 px-6">
                                <h4 class="text-base font-bold text-[#03A30A]">$10/month
                                    Basic</h4>
                            </div>
                            <div class="bg-white py-5 px-6">
                                <h4 class="text-base font-bold text-[#03A30A]">$10/month
                                    Basic</h4>
                            </div>
                        </div>
                        <div class="grid grid-cols-2 my-6">
                            <div>
                                <h3 class="font-semibold text-2xl">Features</h3>
                                <ul class="list-inside list-disc">
                                    <li>Customizable responses</li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="font-semibold text-2xl">Features</h3>
                                <ul class="list-inside list-disc text-[#585858]">
                                    <li>Customizable responses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- right col -->
                    <div class="p-7 rounded-lg border-[1px] border-[]">
                        <img class="rounded-lg h-[340px] " src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="">
                        <div class="max-w-[360px] mx-auto">
                            <h3 class="text-center mt-6 text-2xl font-bold mb-4 max-w-">Hi, how are you doing today?</h3>
                        <p class="text-center">I'm doing well, thank you for asking. How can I assist you today?</p>
                        </div>
                    </div>
                </div>


</div>
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </div>
  </form>
</dialog>
    `;
    modalContainer.appendChild(div)
    const modal = document.getElementById('my_modal_1')

    modal.showModal()
};

loadContent();
