  const textEL = document.querySelector('#data');
  const sizeEL = document.querySelector('#size');
  const logoEL = document.querySelector('#logo');
  const clearEL = document.querySelector('#clear');
  const marginEL = document.querySelector('#margin');
  const dotModeEL = document.querySelector('#dot');
  const dotcolorEL1 = document.querySelector('#dot-color-1');
  const dotcolorEL2 = document.querySelector('#dot-color-2');
  const bgEL = document.querySelector('#bg-color');
  const dlEL = document.querySelector('#btn-dl');

  let op = {
    width: 100, // You can set the default size here (e.g., 300px)
    height: 100, // You can set the default size here (e.g., 300px)
    type: "png",
    data: textEL.value,
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "#4267b2",
        type: "rounded",
        gradient: {
            "type": "linear",
            "colorStops": [ // Add the 'colorStops' field here
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
    }
    // imageOptions: {
    //     crossOrigin: "anonymous",
    //     marginEL: 20
    // }
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

