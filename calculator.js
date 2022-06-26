let result = document.getElementById('calc');

let calculate =(number)=>{
  result.value=result.value+number;
}

let Result=()=>{
  try{
    result.value=eval(result.value);
  }
  catch(err){
    alert('Enter a valid result');
  }
}

let Clear=()=>{
  result.value ='';
}

 let Delete=()=>{
  result.value = result.value.slice(0,-1);
}