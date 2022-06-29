var elList = document.querySelector(".js-list");

function addDom(array,node){
	for (poc of array) {
		var elItem = document.createElement("li");
		var elId = document.createElement("span");
		var elNum = document.createElement("span");
		var elName = document.createElement("span");
		var elImg = document.createElement("img");
		var elType = document.createElement("span");
		var elHeight = document.createElement("span");
		var elWeight = document.createElement("span");
		var elCandy = document.createElement("span");
		var elEgg = document.createElement("span");
		var elSpawnTime = document.createElement("span");
		// var elOption = document.createElement("option")
	
		elId.textContent = `${poc.id}`;
		elNum.textContent = `${poc.num}`;
		elName.textContent = `${poc.name}`;
		elImg.src = `${poc.img}`;
		elType.textContent = `${poc.type}`;
		elHeight.textContent = `${poc.height}`;
		elWeight.textContent = `${poc.weight}`;
		elCandy.textContent = `${poc.candy}`;
		elEgg.textContent = `${poc.egg}`;
		elSpawnTime.textContent = `${poc.spawn_time}`;
	
		elItem.setAttribute("class", "item");
		elId.setAttribute("class", "span");
		elNum.setAttribute("class", "span");
		elName.setAttribute("class", "span");
		elImg.setAttribute("class", "span");
		elType.setAttribute("class", "span");
		elHeight.setAttribute("class", "span");
		elWeight.setAttribute("class", "span");
		elCandy.setAttribute("class", "span");
		elEgg.setAttribute("class", "span");
		elSpawnTime.setAttribute("class", "span");
	
		elItem.appendChild(elId);
		elItem.appendChild(elNum);
		elItem.appendChild(elImg);
		elItem.appendChild(elType);
		elItem.appendChild(elHeight);
		elItem.appendChild(elWeight);
		elItem.appendChild(elCandy);
		elItem.appendChild(elEgg);
		elItem.appendChild(elSpawnTime);
		node.appendChild(elItem);
	}
}

addDom(pokemons, elList);
const elSelect = document.querySelector('.js-select');
let result = [];
elSelect.addEventListener('change',function(){
	result = [];
	elList.innerHTML = '';
	let selectValue = elSelect.value;

	pokemons.forEach((poc) => {
		if(poc.type.includes(selectValue)) {
			result.push(poc);
		}
	});
	addDom(result,elList);
})

