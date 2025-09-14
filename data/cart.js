export const cart=[];
export function addToCart(productId){
   let matchingItem;
        cart.forEach((cartItem)=>{
          if(productId===cartItem.productId){
            matchingItem=cartItem;
          }
        });

          if(matchingItem){
            matchingItem.quantity+=1;
          }
          else{
             cart.push({
          productId:productId,
          quantity:1
        });
          }
        

          let cartQuantity = 0;
          cart.forEach((cartItem)=>{
            cartQuantity+=cartItem.quantity;

          }); 
          
          document.getElementById('cart-quantity')
          .innerHTML=cartQuantity


}