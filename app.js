(function(){
    function init() {
        let dots = document.querySelector('#dots');
        const colors = ['#4ab5ef','#ffc0cb','#f8ce6a'];
        const mainImage = document.querySelector('#mainImage');
        const logo = document.querySelector('.logo');
        const upload_file = document.getElementById('upload_file');
        const uploadBtn = document.querySelector('.uploadBtn');
    
    
        let loading = false;
        let item = ` 
        <div class="item" id="blue-umbrella"></div>
        <div class="item" id="pink_umbrella"></div>
        <div class="item" id="yellow_umbrella"></div>`;
        dots.innerHTML = item;
        let bgColor;
        for (let i = 0; i < dots.children.length; i++) {
          const colorBox = dots.children[i];
          colorBox.style.backgroundColor = colors[i % colors.length];
          colorBox.addEventListener('click', function (e) {
            selectedColor = e.target.style.backgroundColor;
            uploadBtn.style.backgroundColor = e.target.style.backgroundColor;
          });
        }

        const items = document.querySelectorAll('.item')
        uploadNewImages(items,mainImage,loading,bgColor);
        uploadLogo(logo,upload_file,uploadBtn);
    }
    
    function uploadNewImages(items,mainImage,loading){
        items.forEach(item=>{
            item.addEventListener('click',function(e){
                loading = true;
                if(loading){
                    mainImage.src = './loader_icon.svg';
               }
            if( ['blue-umbrella','pink_umbrella','yellow_umbrella'].includes(item.id)){
                setTimeout(()=>{
                    mainImage.src = `./${item.id}.png`;
                },1000)
                loading = false;
            }
           
         })
         })
    }
    
    function uploadLogo(logo,upload_file){
      
        upload_file.addEventListener('change', function() {
         const logoImg = document.createElement('img');
         logo.appendChild(logoImg);
        
         if(upload_file.files.length > 0){
         logoImg.src = './'+upload_file.files[0].name;
         }
         upload_file.style.display = 'none'
       });
    }
    
    
    function uploadLogo(logo,upload_file,uploadBtn){
      
        upload_file.addEventListener('change', function() {
         const logoImg = document.createElement('img');
         logo.appendChild(logoImg);
         const cancelBtn = document.createElement('span');
         cancelBtn.innerHTML = '&times';
         cancelBtn.classList.add('cancelBtn');
        uploadBtn.appendChild(cancelBtn);
        cancelBtn.addEventListener('click',function(){
            logoImg.src = '';
            cancelBtn.textContent = '';
        })
         if(upload_file.files.length > 0)
         logoImg.src = './'+upload_file.files[0].name;
         else
         upload_file.style.display = 'none'
       });
    }
    
    init();
})();