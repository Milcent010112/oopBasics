fetch('./data.json')
.then(resp => resp.json())
.then(data=>{
    const dataList = document.getElementById('data-list');
    //
    data.forEach(item => {
        
        const itemList = document.createElement('li');
        itemList.innerHTML= `<strong>Name:</Strong>  ${item.name}
    <br > <Strong> Email : <Strong/>

    });


}