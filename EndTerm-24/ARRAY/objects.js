const products = [
    {
      name:'Boat Rockerz 255 Headphone',
      mrp:1500,
      discount:{
rate: 120,
       isPercentage:false
  }
    },
    {
      name:'Legion Y540 ',
      mrp:85000,
      discount:{
rate: 12,
       isPercentage:true
  }
    },
    {
      name:'Redgear Mouse',
      mrp:750,
      discount:{
rate: 5,
       isPercentage:true
  }
    },
    
  ];
  function calculatePrice(product){
   return  product.map(obj=>{
        let isdiscount=obj.discount.isPercentage;
        let discountA;
        if(isdiscount){
discountA=(obj.mrp*obj.discount.rate)/100;
        }else{
            discountA=obj.discount.rate;
        }
        let price=obj.mrp-discountA;
        return `The price of ${obj.name} and the discount is ${price}`;
    })
  }
  console.log(calculatePrice(products));;

