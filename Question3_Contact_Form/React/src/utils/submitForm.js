
export async function submitForm(name,email,message,event){
    event.preventDefault();
   const response = await fetch(URL,{method:'POST',body:JSON.stringify({
    name,email,message
   })})
   const text = await response.text();
   alert(text);
}
