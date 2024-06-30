function handleSubmit(){
//  lấy giá trị của input email và chuyển sang in thường
    const emailValue = document.getElementById("email").value.toLocaleLowerCase()

    //lấy element của thẻ p hiển thị lỗi
    const errorEmail = document.getElementById('error-email')
    //điều kiện để là 1 email
    const checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Dùng match để kiểm tra email vừa nhập
    console.log("check mail",emailValue)
    const check = emailValue.match(checkMail)
    
    // lấy phần chứa thông tin user
    const sectionContent = document.querySelector('#info .section-content')
    console.log('check section' , sectionContent)

    //  lấy element để kiểm soát submit
    const submitControl = document.querySelector('.submit-email')
    if(check){
        sectionContent.style.display = 'block'
        submitControl.style.display = 'none'
        errorEmail.innerHTML=''
    }else{
        errorEmail.innerHTML='Vui lòng nhập đúng định dạng email'
    }

}
function handleOnMouseOver(element){
   
    const viewMore = element.querySelector('.view-more')
    viewMore.style.display = 'inline-block'
    

}

function handleOnMouseOut(element){
   const viewMore = element.querySelector('.view-more')
    viewMore.style.display = 'none'
}
function handleViewMore(element) {
    const parentElement = element.closest(".parent");
    const sectionContent = parentElement.querySelector(".section-content");
    const viewMore = parentElement.querySelector(".view-more");
  
    if (sectionContent.style.display === "none") {
      sectionContent.style.display = "block";
      viewMore.innerHTML = "View less";
    } else {
      sectionContent.style.display = "none";
      viewMore.innerHTML = "View more";
    }
  }