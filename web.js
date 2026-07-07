function toggleForm(){
    document.getElementById('signupForm').classList.toggle('hidden');
    document.getElementById('loginForm').classList.toggle('hidden');
}
document.getElementById('signupForm').addEventListener('submit',function(e){
    e.preventDefault();
    window.location.href="web.html";;
});
document.getElementById('loginForm').addEventListener('submit',function(e){
    e.preventDefault();
    window.location.href="web.html";
});