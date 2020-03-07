function app(){
    document.getElementById('date').innerHTML = new Date().toDateString()
    let input = document.getElementById('myInput');
    let btn = document.getElementById('addBtn');
    let list = document.getElementById('list');

    btn.addEventListener('click', function(){
        if(input.value.trim() !== ''){
            let li = document.createElement('li');
            let button = document.createElement('button');
            let textnode = document.createTextNode(input.value);
            button.innerHTML = '&times';
            button.setAttribute('class', 'remove');

            li.appendChild(textnode);
            li.appendChild(button);

            list.appendChild(li);

            return false;
        }

        alert('Please type in a value')
    })

    list.addEventListener('click', function(event){
        if(event.target.matches('.remove')){
            if(list.hasChildNodes()){
                for(let i=1;i<list.childNodes.length;i++){
                    list.childNodes[i].setAttribute('id', i);
                }

                let index = event.target.parentNode.id;
                list.removeChild(list.childNodes[index])
            }
        }
    })
}