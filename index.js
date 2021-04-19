const fetch = require("sync-fetch");
const Page = require("./_layout/Default");

module.exports = class extends Page {
  constructor() {
    super({ title: "Home", sName: "Li Deng" });
  }
  render(sPage) {
    const oJson = fetch(
      "https://mobile-winter--todo-default-rtdb.firebaseio.com/meals.json"
    ).json();
    console.log(oJson);
    let sResult = `
    <form name="orderForm" method="Post" action="">
    <div class="row">              
                  `;
    let count = 0; 
    Object.keys(oJson).map((key) => {
      const oEntity = oJson[key];
      console.log(oEntity);
      oEntity.id = key;
      sResult += `
      
          <div class="col col-sm">
            <div class="card" style="width:300px; height: 400px">  
                <img class="card-image-top" src="${oEntity.featured_image}" alt="${oEntity.title}">
                <div class="card-body">  
                    <h4 class="card-title">${oEntity.title}</h4>
                    <p class="card-text">${oEntity.full_description}</p>
                    <p class="card-text">$ ${oEntity.price}</p>
                </div>
                    <input type="hidden" name="cardName${count}" value="${oEntity.title}" />
                    <input type="hidden" name="cardPrice${count}" value="${oEntity.price}" />
                    <input type="number" name="cardAmount${count}" placeholder="Order amount" />
              </div>    
          </div>          
            `;
            count++;
    });
    // const oJson2 = fetch(
    //   "https://mobile-winter--todo-default-rtdb.firebaseio.com/meals.json"
    // ).json();
    // console.log(oJson2);
    // Object.keys(oJson2).map((key) => {
    //   const oEntity2 = oJson2[key];
    //   console.log(oEntity2);
    //   oEntity2.id = key;
    //   sResult += `
      
    //       <div class="col col-sm">
    //         <div class="card" style="width:300px; height: 400px">  
    //             <img class="card-image-top" src="${oEntity2.featured_image}" alt="${oEntity2.title}">
    //             <div class="card-body">  
    //                 <h4 class="card-title">${oEntity2.title}</h4>
    //                 <p class="card-text">${oEntity2.full_description}</p>
    //             </div>
    //             <form action="http://localhost:3002/payment" method="post">
    //                 <input type="hidden" value="${oEntity2.title}" />
    //                 <input type="tel" placeholder="enter your number" />
    //                 <button type="submit">Order now</button>
    //             </form>
    //         </div>    
    //       </div>                    
    //         `;
    // });
    sResult +=`   </div> 
      <button name="orderCalc">Order Calc</button>

    </form>
    <form action="http://localhost:3002/payment" method="post">

    <div class="order">
        <p id="orderResult">Please check your order here.</p>
        <br>
        <input type="hidden" id="OrderId" value="" />
        <input type="hidden" id="Total" value="" />
        <input type="tel" placeholder="Enter your number" />
        <button type="submit">Pay Now</button>
    </div>
</form>


              `;
    return sResult;
  }
};
