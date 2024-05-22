const init=()=>{
    RenderProducts();
    document.getElementById('modalPH').addEventListener('click',()=>{
        document.getElementById('modalPH').style.display = 'none';
    })
    
}

const RenderProducts=()=>{
    const ph = document.getElementById('ph');
    let str = ``;
    for (let i = 0; i < Data.length; i++) {
        const obj = Data[i];
        str+=`
        <div id="card${i}" class="card">
        <p>${obj.name}</p>
        <p>${obj.brand}</p>
        <p>${obj.price} $</p>
        <button onclick="MoreInfoModal(this.id)" id="M${i}">More info</button>
        <br>
        <button onclick="buy(this.id)" id="B${i}">Buy</button>
        </div>
        `;
      
        
    }
    ph.innerHTML = str;
}



const buy=(id)=>{
    const index = id.replace('B','')
    alert('You bought the product '+Data[index].name);
}

const MoreInfoModal=(id)=>{
    const modalPH = document.getElementById('modalPH');
    let index = id.replace('M','');
    const obj = Data[index];
    let str=``;
    for (const key in obj.specs) {
        console.log(key, obj.specs[key],obj)
        str+=`<p>${key} : ${obj.specs[key]}</p>`

    }
    modalPH.innerHTML = str;
    modalPH.style.display = 'block';
}

