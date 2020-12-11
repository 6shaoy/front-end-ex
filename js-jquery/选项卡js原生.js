window.onload = function(){
    var oDiv = document.getElementById('div1');
    var aBtns = oDiv.getElementsByTagName("button");
    var aDivs = oDiv.getElementsByTagName("div");
    
    
    for (var i=0; i<aBtns.length; i++){
        aBtns[i].index = i; // 记录当前button的indice
        aBtns[i].onclick = function(){ // 为每个按钮添加onclick事件
            for (var j=0; j<aDivs.length; j++){
                aBtns[j].className = '';
                aDivs[j].style.display = 'none';
            }
            
            this.className = 'active';
            aDivs[this.index].style.display = 'block';
        }
    }
}