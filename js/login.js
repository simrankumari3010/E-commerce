let url="http://localhost:3000"
window.localStorage.setItem("url",url)
document.querySelector('.img-btn').addEventListener('click', function()
	{
		document.querySelector('.cont').classList.toggle('s-signup')
	}
);
function loginl(){
    let email1=document.getElementById("emailid").value
    let pwd=document.getElementById("password").value
    if (email1=='')  
        document.getElementById('email_error').innerHTML= "*Please Enter Email"
        // return false;  
    if(pwd==null || pwd=="")
        document.getElementById('pass_error').innerHTML="Please Enter Password "
        // return false; 

        $.ajax({
          url :url+"/users?id="+email1,
          type : "GET",
          success:(posRes)=>{
            if(posRes.length>0 && posRes[0].upwd==pwd){
              alert("Login success")
              window.sessionStorage.setItem('email',email1)
              // let e=posRes[0].id
              // let n=posRes[0].uname

              // console.log(posRes[0].id)
              // sessionStorage.setItem("user") = n
              // sessionStorage.setItem("email") = e
              // console.log('second')
               window.open('./home.html')
               
            }
            else{
              alert("Login fail")
            }
          },error:(errRes)=>{
            alert("Error")
          }
        })
 }
 $(document).ready(()=>{
   $("#login").click((e)=>{
     e.preventDefault()
     loginl()
   })

 })
 function submit(){
    let name=document.getElementById("name").value
    let email1=document.getElementById("emailid1").value
    let pwd=document.getElementById("password1").value
  
    if (name=='')  
      document.getElementById('name_error1').innerHTML= "*Please Enter name"
    else
      document.getElementById('name_error1').innerHTML= ""
  
  
    if (email1=='')
      document.getElementById('email_error1').innerHTML= "*Please Enter Email"
    else
      document.getElementById('email_error1').innerHTML= ""
  
   
    if(pwd==null || pwd=="")
      document.getElementById('pass_error1').innerHTML="Please Enter Password "
    else
      document.getElementById('pass_error1').innerHTML=""
  

    $.ajax({
      url :"http://localhost:3000/users",
      type : "POST",
      data:{
        "id":email1,
        "uname":name,
        "upwd":pwd
      }
    })
 }

 