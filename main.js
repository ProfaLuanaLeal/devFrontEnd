// declarando as variaveis de conexão html
const notaform=document.getElementById('notaform');
const notaInput=document.getElementById('notaInput');
const dataInput=document.getElementById('dataInput');
const listaNotas=document.getElementById('listaNotas');

//Função para carregar as notas do localStorage
function carregarNotas(){
    const notas=JSON.parse(localStorage.getItem('notas')) || [];
    listaNotas.innerHTML='';
    notas.forEach(({texto,data,hora}) => {
        const li=document.createElement('li');
        li.innerHTML=`${texto}<div class="data-hora">${data} ${hora}</div>`;
        listaNotas.appendChild(li);   
    });
}    
//adicionar uma nova nota
notaform.addEventListener('submit',function(event){
    event.preventDefault();
    const texto=notaInput.value;
    const data=dataInput.value;
    const hora=new Date().toLocaleTimeString('pt-BR',{hour12:false});
    const notas=JSON.parse(localStorage.getItem('notas')) || [];
    notas.push({texto,data,hora});
    localStorage.setItem('notas',JSON.stringify(notas));
    carregarNotas()
});

//iniciar
document.addEventListener('DOMContentLoaded',carregarNotas);