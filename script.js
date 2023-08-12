  
   const settingDiv = document.querySelector(".hero");
   const hideButton = document.getElementById("hideButton");
  
    hideButton.addEventListener("click", function () {

       if (settingDiv.style.height == "400px") {
           settingDiv.style.height = "0";
       } else {
           settingDiv.style.height = "400px";

       }

   });
  
  
  
  const textEL = document.querySelector('#data');
  const sizeEL = document.querySelector('#size');
  const logoEL = document.querySelector('#logo');
  const clearEL = document.querySelector('#clear');
  const marginEL = document.querySelector('#margin');
  const dotModeEL = document.querySelector('#dot');
  const dotModecolorEL = document.querySelector('#colordot');
  const dotcolorEL1 = document.querySelector('#dot-color-1');
  const dotcolorEL2 = document.querySelector('#dot-color-2');
  const bgEL = document.querySelector('#bg-color');
  const dlEL = document.querySelector('#btn-dl');

  const square = document.getElementById('1');
  const dots = document.getElementById('2');
  const rounded = document.getElementById('3');
  const extrarounded = document.getElementById('4');
  const classy = document.getElementById('5');
  const classyrounded = document.getElementById('6');  
  const fb = document.getElementById('11');
  const insta = document.getElementById('22');
  const yt = document.getElementById('33');
  const tweet = document.getElementById('44');
  const tele = document.getElementById('55');
  const scan = document.getElementById('66');

 


  let op = {
    width: 300,
    height: 300,
    type: "png",
    data: "https://qurcode.netlify.app/",
    margin: 6,
    image: scan.src,
    dotsOptions: {
        color: "#4267b2",
        type: "classy",
        gradient: {
            "type": "linear",
            "colorStops": [ 
                {
                    "offset": 0,
                    "color": "#000000"
                },
                {
                    "offset": 1,
                    "color": "#000"
                }
            ]
        }
    },
    backgroundOptions: {
        color: "#fff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        marginEL: 20
    }
};


  render();


  sizeEL.addEventListener('input', e=>{
    op.width = e.target.value * 10;
    op.height = e.target.value * 10;
    render();
  });

  textEL.addEventListener('keyup', e=>{
    op.data = e.target.value;
    render();
  });
    
  marginEL.addEventListener('input', e=>{
    op.imageOptions = {margin: e.target.value};
    render();
  });

  dotModeEL.addEventListener('change', e=>{
    op.dotsOptions.type = e.target.value;
    render();
  });
  dotModecolorEL.addEventListener('change', e=>{
    op.dotsOptions.gradient.type = e.target.value;
    render();
  });
  dotcolorEL1.addEventListener('input', e=>{
    op.dotsOptions.gradient.colorStops[0].color= e.target.value;
    render();
  });
   
  dotcolorEL2.addEventListener('input', e=>{
    op.dotsOptions.gradient.colorStops[1].color= e.target.value;
    render();
  });

  bgEL.addEventListener('input', e=>{
    op.backgroundOptions.color= e.target.value;
    render();
  });
   
   

  var qrCode;
  function render() {
    qrCode = new QRCodeStyling(op);
    let canvasEl = document.querySelector('#canvas');
    canvasEl.innerHTML = '';
    qrCode.append(canvasEl);
    canvasEl.nextElementSibling.innerHTML = `${op.width}px x ${op.height}px`
  }

  function browse(){
    logoEL.click();
  };

  logoEL.addEventListener('change', e=>{
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = ()=>{
      op.image = reader.result;
      render();
    };
    reader.readAsDataURL(file);
  });


   clearEL.addEventListener('click',  e=>{
    delete op.image;
    render();
   });

   dlEL.addEventListener('click', e=>{
    qrCode.download({name: 'qr', extenstion:'svg'});
   });


  square.addEventListener('click', e=>{
    op.dotsOptions.type = "square";
    render();
  });

  dots.addEventListener('click', e=>{
    op.dotsOptions.type = "dots";
    render();
  });

  rounded.addEventListener('click', e=>{
    op.dotsOptions.type = "rounded";
    render();
  });

  extrarounded.addEventListener('click', e=>{
    op.dotsOptions.type = "extra-rounded";
    render();
  });

  classy.addEventListener('click', e=>{
    op.dotsOptions.type = "classy";
    render();
  });

  classyrounded.addEventListener('click', e=>{
    op.dotsOptions.type = "classy-rounded";
    render();
  });

 fb.addEventListener('click', e=>{
    const newImageUrl = fb.src; 
            op.image = newImageUrl;
    render();
  });

  yt.addEventListener('click', e=>{
    const newImageUrl = yt.src; 
            op.image = newImageUrl;
    render();
  });

  insta.addEventListener('click', e=>{
    const newImageUrl = insta.src; 
            op.image = newImageUrl;
    render();
  });

  tweet.addEventListener('click', e=>{
    const newImageUrl = tweet.src; 
            op.image = newImageUrl;
    render();
  });
  
  scan.addEventListener('click', e=>{
    const newImageUrl = scan.src; 
            op.image = newImageUrl;
    render();
  });

  tele.addEventListener('click', e=>{
    const newImageUrl = tele.src; 
            op.image = newImageUrl;
    render();
  });   