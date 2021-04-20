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
            <div class="card" style="width:300px; height: 450px; margin-top: 1rem;">  
                <img class="card-image-top" src="${oEntity.featured_image}" alt="${oEntity.title}">
                <div class="card-body">  
                    <h4 class="card-title">${oEntity.title}</h4>
                    <p class="card-text">${oEntity.full_description}</p>
                    <p class="card-text">$ ${oEntity.price}</p>
                    <input type="hidden" name="cardName${count}" value="${oEntity.title}" />
                    <input type="hidden" name="cardPrice${count}" value="${oEntity.price}" />
                    <input type="number" name="cardAmount${count}" placeholder="Order amount" />
                </div>
                    
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
    sResult += `   
    </div> 
      <button class="btn btn-primary mt-3" name="orderCalc">Calculate your total</button>
        
    </form>
    <form action="http://localhost:3002/payment" method="post">

    <div class="order">

      <div class="card mt-3" style="width: 18rem;">
        <div class="card-body">
          <p class="card-title" id="orderResult">Please check your order here.</p>
          <br>
          <p class="card-text"><input type="hidden" id="orderId" name="orderId" value="" /></p>
          <p class="card-text"><input type="hidden" id="total" name="total" value="" /></p>
        </div>
      </div> 

        <div class="input-group mb-3 mt-3">
          <input class="form-control" type="tel" name="phone" id="phone" placeholder="Enter your phone number" />
          <div class="input-group-append">
            <button type="submit" class="btn btn-warning">Pay Now</button>
          </div>
        </div>

    </div>
  </form>
              `;
    return sResult;
  }
};
