 <script id="1552846141">
      //Determine state of doc load in order to affect DOM with buttons
(function () {
	//IIEF = Auto launching js (Need Duda vs Instasite vs HTML5 versions?)
	alert("Tried to launch script auto ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]");
	if (localStorage.BFTest == 'true') {
	document.addEventListener("readystatechange", (event) => {
      if (event.target.readyState === "complete") {
                    getProductInfo();
            }
        })};};
	})();
     </script>
     <a data-display-type="block" class="u_BF48446630 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient" file="false" href="https://sartoriallounge.made-to-order.com/redirect.aspx?type=select-size&idcs=608&orderid=e2a65cbc-3616-481a-89b7-b3c61f62ad8a&idc=16085" dmle_widget="dudaButtonLinkId" data-element-type="dButtonLinkId" id="BF48446630">
      <span class="iconBg" aria-hidden="true" id="BF59539565">
       <span class="icon hasFontIcon icon-star" id="BF95320533">
       </span>
      </span>
      <span class="text" id="BF1Txt165">
       Confirm Details
      </span>
     </a>
     <a data-display-type="block" class="u_1449564210 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient" file="false" onclick="Clicker()" dmle_widget="dudaButtonLinkId" data-element-type="dButtonLinkId" id="1449564210">
      <span class="iconBg" aria-hidden="true" id="1849021367">
       <span class="icon hasFontIcon icon-star" id="1890147112">
       </span>
      </span>
      <span class="text" id="1237875717">
       Show Alert
      </span>
     </a>
     <a data-display-type="block" class="u_1449564265 align-center dmButtonLink dmWidget dmWwr default dmOnlyButton dmDefaultGradient" file="false" onclick="getProductInfo()" dmle_widget="dudaButtonLinkId" data-element-type="dButtonLinkId" id="1449564265">
      <span class="iconBg" aria-hidden="true" id="1494878139">
       <span class="icon hasFontIcon icon-star" id="1040874739">
       </span>
      </span>
      <span class="text" id="1320527131">
       getProductInfo
      </span>
     </a>
     <script id="1907469342">
      localStorage.setItem("Category","4323234");
        localStorage.setItem("ProductID","10125");
        localStorage.setItem("GUID", "1000");
     </script>
     <script id="1020247230">
      //var token = 'Bearer ' + Ecwid.getAppPublicToken('custom-app-96407503-1');
    async function getProductInfo() {
      //This must load AFTER the dmle_extension / Ecwid Store
      window.Ecwid.OnAPILoaded.add(function() {
        console.log("Ecwid storefront JS API has loaded >>>>>>>>>>>>>>>>>>>>>>>");
        });
        var targetProd = '';
      Ecwid.OnPageLoaded.add(function (page) {
           // alert (page.productId);
            targetProd = page.productId;
        }); 
        var token = 'Bearer ' + Ecwid.publicToken;
        console.log(token);
        var storeId = Ecwid.getOwnerId()
        console.log(storeId);  
        let theURL ='https://app.multiscreenstore.com/api/v3/'+storeId+'/products/' + targetProd + '?responseFields=id,sku,price,nameYourPriceEnabled,attributes'
	    , headerFetch = {
	  method: 'GET',
	  headers: {
	    'Authorization' : token,
	    'accept': 'application/json;'
	        }
        }
        , output = await fetch(theURL, headerFetch);
	    if (!output.ok)
	    return;
	    let n = await output.json();
	    //? This is where you would grab Buy and Config URL
	    alert("This is the sku " + n.attributes[0].BF_BuyLink);
	    //alert("BFLink:" + n);
	    return n;
//	.then(response => response.json())
//	.then(data => console.log(data))
//	.catch(error => error)
      }
     </script>
 /*    <!--     <script id="1851970170">
      /* See if this is a BESPOKE category 
        Try to send it to log first to see if it is code OR text */
        /* grab the second element which is the Add to Bag Button */
        /* document.getElementsByClassName("details-product-purchase__add-buttons").appendChild(document.getElementById("1848759033"));*/
/*Ecwid.OnPageLoaded.add(function(page){
  console.log("Current page is of type: " + page.type);
});
        const node = document.getElementsByClassName("details-product-purchase__add-buttons").lastChild;
        const NewNode = node.cloneNode(true);
        console.log("*************" + node.className);
        node.setAttribute("class" );
        window.localStorage.setItem("show_ec_logs","true");
        for (let i = 0; i < elements.length; i++) {
        if (NewNode[i].tagName == "BUTTON") {
           NewNode[i].onClick = "BFShoeBuy()" ;
           NewNode[i].InnerHTML = "Add Shoe Details";}
        };
        NewNode.setAttribute("id", "BFShoeBuy");
        document.getElementsByClassName("details-product-purchase__add-buttons").appendChild(NewNode);
    </script> */
     <script id="1256045056">
      function Clicker() {
             Ecwid.OnPageLoaded.add(function(page) {alert("page " + page.productId );
                         console.log("Ecwid " + page.type + " loaded for sure!!");}
             );
         }
     </script>
     <script id="1996710625">
      function myFunction() {
            window.Ecwid.Cart.addProduct(613401380) ;
            window.Ecwid.openPage('cart');
            console.log("Tried to open cart!");
             }
     </script>
     <script id="1670810882">
      function BtnClk() {
            const node = document.getElementsByClassName("details-product-purchase__add-buttons").lastChild;
             console.log(node.className);
         }
     </script>
     <script id="1437438130">
      function BFShoeBuy(BFBuyLink) {
              window.open("/BF_Config/#/select-size.aspx?idcs=608&orderid=cfa1be8d-b1a2-43ea-9d24-87096be90f29&idc=16085&thumb=https://cdn1.made-to-order.com/get-inspired/img/products/5834_thumb.jpg?v=1593167584&width=400");
            }
     </script>
