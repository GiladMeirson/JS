function init(){
    RenderChessBoard();
}

const RenderChessBoard = () => {
    const ph = document.getElementById('ph');
    let str = `<table>`;
    for (let i = 0; i < 8; i++) {
        str+=`<tr>`;
        for (let j = 0; j < 8; j++) {
            if((i+j)%2==0){
                str+=`<td class="white"></td>`;
            }else{
                str+=`<td class="black"></td>`;
            }
        }
        str+=`</tr>`;
        
    }
    str+=`</table>`;
    ph.innerHTML = str;

}