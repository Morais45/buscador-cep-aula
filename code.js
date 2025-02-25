async function getCepInfo(){
    var cep = document.querySelector("#cep");
    if(!(cep.value.length == 8)){
        alert("Preencha o campo CEP");
        return;
    }

   var reply = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
   var data = await reply.json();

   if(data.erro){
    alert("CEP não encontrado");
    return;
   }

   console.log(data.logradouro);
   console.log(data.bairro);
   console.log(data.localidade)
   console.log(data.estado)

   document.querySelector("#rua").innerHTML = data.logradouro
   document.querySelector("#bairro").innerHTML = data.bairro
   document.querySelector("#cidade").innerHTML = data.localidade
   document.querySelector("#estado").innerHTML = data.estado
   
}

function clearCep(){
    document.querySelector("#cep").value = "";
    document.querySelector("#rua").innerHTML = "";
    document.querySelector("#bairro").innerHTML = "";
    document.querySelector("#cidade").innerHTML = "";
    document.querySelector("#estado").innerHTML = "";
}
