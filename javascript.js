const pw = document.querySelector('#password');
const pwConfirm = document.querySelector('#password_confirm');
const submit = document.querySelector('.heart');

pwConfirm.addEventListener('keyup', () => { if (pwConfirm.value !='') { if (pwConfirm.value == pw.value){
pw.style.boxShadow ='rgba(89, 242, 112, 0.4) 0px 7px 10px'; pwConfirm.style["boxShadow"] = "rgba(89, 242, 112, 0.4) 0px 7px 10px";
}}});

submit.addEventListener('mouseover', ()=> { if (pwConfirm.value != pw.value || pw.value == ""){
pwConfirm.classList.toggle('invalid'); pw.classList.toggle('invalid');  
}});