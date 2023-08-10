

		const options = {
			method: 'GET',
			headers: {
			  'X-RapidAPI-Key': 'b7e21a7304msh9cbad96d4b859b2p17967cjsnaab2590c43b9',
			  'X-RapidAPI-Host': 'house-plants.p.rapidapi.com'
			}
		  };
		  
		  fetch('https://house-plants.p.rapidapi.com/all', options)
			.then(response => response.json())
			.then(response => {
			  console.log(response)
			  
			
			  const res = response;
			 
			  
			  const allData = res.map((showAll)=>{
				const commonIndex = showAll.common;

				if (commonIndex[0] === 'Chinese Evergreen'){
					return commonIndex[1]
				}else if(commonIndex[0]===commonIndex[0]){
					return commonIndex[0]
				}else{
					return commonIndex[0]
				}
			   
			  })

			  const origin = res.map((showAll)=>{
				return showAll.origin;
			  })

			  

			  const ideallight = res.map((showAll)=>{
				return showAll.ideallight;
			  })

			 
		
			  const watering = res.map((showAll)=>{
				return showAll.watering;
			  })

			  const toleratedLight = res.map((showAll)=>{
				return showAll.toleratedlight;
			  })

			  const familyName = res.map((showAll)=>{
				return showAll.family;

			  })

			  const latName = res.map((showAll)=>{
				return showAll.latin;

			  })

			  const category = res.map((showAll)=>{
				return  showAll.category;
				

			  })

		
			  
			

			  for (let i=0; (i<allData.length) && (i<familyName.length) && (i<latName.length) && (i<category.length) && (i<watering.length)&& (i<origin.length)&& (i<ideallight.length)&& (i<toleratedLight.length);i++){
				// console.log(allData[i])
				

				const dataAll = allData[i];
				const familyAll = familyName[i];
				const latNames = latName[i];
				const categories = category[i];
				const water = watering[i];
				const ideallights = ideallight[i];
				const origins = origin[i];
				const toleratedLights = toleratedLight[i];
				const newMainContainer = document.querySelector('.main-container');
        
				const subContainer = document.createElement('div');
				subContainer.classList.add('subContainer');

				// console.log(dataAll);
				// console.log(categories);

				// ***************this is for category display ********************************
				const arrayCategory = {name:dataAll, category:categories};
			
				if (arrayCategory.category === 'Flower'){
					const flowerCategory = arrayCategory;

				const newParagraph = document.createElement('p');
				newParagraph.classList.add('commonName')
				newParagraph.innerHTML = ( dataAll );
				subContainer.append(newParagraph);
				newMainContainer.append(subContainer);

				const iconP = document.createElement('p');
				iconP.classList.add('iconP')
				iconP.innerHTML = '<i class="bi bi-cart-plus fa-2x"></i>';
				subContainer.append(iconP);
				
				const newDiv = document.createElement('div');
				newDiv.classList.add('priceAndFavoriteDiv');
				const pesoSign = document.createElement('p');
				pesoSign.classList.add('pesoSign')
				pesoSign.innerHTML = '₱'
				const price = document.createElement('p');
				price.classList.add('price');
				let val = getRandomInt(100, 300);
				price.innerHTML = (val);
				price.setAttribute('value', val)
				newDiv.append(pesoSign);
				newDiv.append(price);
				
				const iconHeart = document.createElement('p');
				iconHeart.classList.add('iconHeart')
				iconHeart.innerHTML = '<i class="bi bi-heart fa-2x"></i>';
				newDiv.append(iconHeart);

				const cardPlant = document.createElement('div');
				cardPlant.classList.add('card');

				const newImg = document.createElement('img');
				newImg.classList.add('card-img-top');
				newImg.setAttribute('id', 'imageCard');
				newImg.setAttribute('data-bs-toggle', 'modal');
				newImg.setAttribute('data-bs-target', '#exampleModal');
				
				
				newImg.src = `./image/${flowerCategory.name}.webp` 

				const fig = document.createElement('figure');
				fig.append(newImg);
		

				cardPlant.append(fig);
				cardPlant.append(subContainer);
				cardPlant.append(newDiv);
				newMainContainer.append(cardPlant);
				
				// DISPLAY SPECIFIC PLANT WHEN CLICK
                newImg.addEventListener('click', e =>{
					const modal = document.querySelector('.modal-body');
	
					const wrap = document.createElement('div');
					wrap.classList.add('wrap');
	
					const detailsDiv = document.createElement('div');
					detailsDiv.classList.add('detailsDiv');

					iconP.innerHTML = ' ';
					wrap.append(cardPlant)
	
					const categoryParagraph = document.createElement('p');
						categoryParagraph.innerHTML = ('Category Name : ' + '' + categories);
						// categoryParagraph.append(categories);
						
						const familyParagraph = document.createElement('p');
						familyParagraph.innerHTML = ('Family Name : '+ '' + familyAll);
					
	
						const latinParagraph = document.createElement('p');
						latinParagraph.innerHTML = ('Latin Name : ' + '' + latNames);
	
						const waterParagraph = document.createElement('p');
						waterParagraph.innerHTML = ('Watering : ' + '' + water);
	
						const originParagraph = document.createElement('p');
						originParagraph.innerHTML = ('Origin : ' + '' + origins);
	
						const ideallightParagraph = document.createElement('p');
						ideallightParagraph.innerHTML = ('Ideal Light : ' + '' + ideallights);
	
						const toleratedLightParagraph = document.createElement('p');
						toleratedLightParagraph.innerHTML = ('Tolerated Light : ' + '' + toleratedLights);
					
	
						const buyThisPlantButton = document.createElement('p');
						buyThisPlantButton.classList.add('buyThisPlantButton');
						buyThisPlantButton.setAttribute('type', 'button')
						buyThisPlantButton.setAttribute('data-bs-toggle', 'modal');
						buyThisPlantButton.setAttribute('data-bs-target', '#cartModal');
					
					
						buyThisPlantButton.innerHTML = 'Buy this Plant';
					
	
	
						detailsDiv.append(categoryParagraph);
						detailsDiv.append(familyParagraph);
						detailsDiv.append(latinParagraph);
						detailsDiv.append(waterParagraph);
						detailsDiv.append(originParagraph);
						detailsDiv.append(ideallightParagraph);
						detailsDiv.append(toleratedLightParagraph);

						detailsDiv.append(buyThisPlantButton);
	
						wrap.append(detailsDiv);
						modal.append(wrap);

						buyThisPlantButton.addEventListener('click', () =>{
						
							addToCart()
							const cartPlantPrice = document.querySelectorAll('.cartPlantPrice');
						let subTotal = document.querySelector('#subTotalPrice');
						const shippingFee = document.querySelector('.shippingFee');
						const totalAll = document.querySelector('.card-total');

						let sum = 0;
					
						for (let i =0; i< cartPlantPrice.length;i++){
						sum += parseInt(cartPlantPrice[i].innerHTML)
					
						subTotal.innerHTML = sum

						totalAll.innerHTML = sum + parseInt(shippingFee.innerHTML)

						}
							// ############### copy the total price from cart to checkout 
				const proceedTocheckoutButton = document.querySelector('.btn-proceed-checkout');
				proceedTocheckoutButton.addEventListener('click', ()=>{
					const totalPriceOfPlant = document.querySelector('#totalPriceOfPlant');
					const grandTotal = document.querySelector('#grandTotal');
					

					totalPriceOfPlant.innerHTML = ('₱' + ' ' + parseInt(subTotal.innerHTML));
					grandTotal.innerHTML = ('₱' + ' ' + parseInt(totalAll.innerHTML));
				})
						})
	
	
					})
	
					const modalClose = document.querySelector('.btn-secondary');
						modalClose.addEventListener('click', ()=>{
							location.reload();
						})

						iconHeart.addEventListener('click', ()=>{

							if (iconHeart.innerHTML === '<i class="bi bi-heart fa-2x"></i>'){
								iconHeart.innerHTML = '<i class="bi bi-heart-fill fa-2x"></i>'
								iconHeart.style.color = 'green';
							}else{
								(iconHeart.innerHTML = '<i class="bi bi-heart fa-2x"></i>')
								iconHeart.style.color = 'black';
							}
							
							})

							// ----------------ADD TO CART FUNCTION--------------------------------------
			
				iconP.addEventListener('click', (e) =>{
					addToCart()
					iconP.style.color = "red";
	
				})
	
	
				function addToCart(){
					const plantItems = document.querySelector('.plant-item-details');
	
					const subCardDiv = document.createElement('div');
					subCardDiv.classList.add('subCardDiv')
	
				
					const cartImage = document.createElement('img');
	
					cartImage.classList.add('cartImage');
					cartImage.src = newImg.src;
					cartImage.setAttribute('width', '20%')
	
					const cartPlantName = document.createElement('p');
					cartPlantName.classList.add('cartPlantName');
					cartPlantName.append(allData[i]);

					const plantQty = document.createElement('input');
					plantQty.classList.add('plantQty');
					plantQty.setAttribute('type', 'number')
					plantQty.setAttribute('value',"1")
					plantQty.setAttribute('min', "1")
					plantQty.setAttribute('max', "10")
			
					let cartPlantPrice = document.createElement('p');
					cartPlantPrice.classList.add('cartPlantPrice');
				
					cartPlantPrice.setAttribute('value', `${price.innerHTML}` )
	
					cartPlantPrice.innerHTML = `${price.innerHTML}`;
	
					
			
	
					const iconDelete = document.createElement('p');
					iconDelete.classList.add('iconDelete')
					iconDelete.innerHTML = '<i class="bi bi-trash fa-lg"></i>';
					
	
					subCardDiv.append(cartImage);
					subCardDiv.append(cartPlantName);
					subCardDiv.append(plantQty);
					subCardDiv.append(cartPlantPrice);
					subCardDiv.append(iconDelete);
					plantItems.append(subCardDiv);

					// =========displaying the total price of plants in the cart==============
				const placeOrder = document.querySelector('.cartIconNav')
				placeOrder.addEventListener('click', ()=>{

				const cartPlantPrice = document.querySelectorAll('.cartPlantPrice');
				let subTotal = document.querySelector('#subTotalPrice');
				const shippingFee = document.querySelector('.shippingFee');
				const totalAll = document.querySelector('.card-total');

				let sum = 0;
			
				for (let i =0; i< cartPlantPrice.length;i++){
					  sum += parseInt(cartPlantPrice[i].innerHTML)
				
				subTotal.innerHTML = sum

				totalAll.innerHTML = sum + parseInt(shippingFee.innerHTML)

				}

				// ############### copy the total price from cart to checkout 
					const proceedTocheckoutButton = document.querySelector('.btn-proceed-checkout');
					proceedTocheckoutButton.addEventListener('click', ()=>{
					const totalPriceOfPlant = document.querySelector('#totalPriceOfPlant');
					const grandTotal = document.querySelector('#grandTotal');
					

					totalPriceOfPlant.innerHTML = ('₱' + ' ' + parseInt(subTotal.innerHTML));
					grandTotal.innerHTML = ('₱' + ' ' + parseInt(totalAll.innerHTML));
				})

				})
					
					
					iconDelete.addEventListener('click', ()=>{
						subCardDiv.remove(cartImage);
						subCardDiv.remove(cartPlantName);
						subCardDiv.remove(cartPlantPrice);
						subCardDiv.remove(iconDelete);

						let subTotal = document.querySelector('#subTotalPrice');
					const shippingFee = document.querySelector('.shippingFee');
					const totalAll = document.querySelector('.card-total');

					let sum = parseInt(subTotal.innerHTML);
			
					console.log(sum)
					total = sum - parseInt(cartPlantPrice.innerHTML)
					
					subTotal.innerHTML = total

					totalAll.innerHTML = total + parseInt(shippingFee.innerHTML)

					if (subTotal.innerHTML === "0"){
						document.querySelector('.btn-proceed-checkout').disabled = true;
						document.querySelector('.btn-proceed-checkout').style.backgroundColor = "grey"
					}
					
					})
	
				
				}
                

				
				
                }

			  }
			})
			.catch(err => console.error(err));


			function getRandomInt(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
			  }


              //  ******************** BACK TO TOP ARROW ********************************

			  let mybutton = document.querySelector("#myBtn");
			  let navbar = document.querySelector('.navbar')
		
			  
			  // When the user scrolls down 20px from the top of the document, show the button
			  window.onscroll = function() {scrollFunction()};
			  
			  function scrollFunction() {
				if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				  mybutton.style.display = "block";
					navbar.style.backgroundColor = "white";
					// navbar.style.color = "white";
				} else {
				  mybutton.style.display = "none";
				//   navbar.style.backgroundColor = "transparent";
				}
			  }
			  
			  // When the user clicks on the button, scroll to the top of the document
			  function topFunction() {
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
				
			  }

	//  ******************** BACK TO TOP ARROW ********************************
			  



// ############################## PAYPAL PAYMENT ################################################################

const amountElement = document.querySelector('#amount')
paypal_sdk.Buttons({
        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amountElement.value // Can also reference a variable or function
              }
            }]
          });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          return actions.order.capture().then(function(orderData) {
            // Successful capture! For dev/demo purposes:
            console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            const transaction = orderData.purchase_units[0].payments.captures[0];
            alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
            // When ready to go live, remove the alert and show a success message within this page. For example:
            // const element = document.getElementById('paypal-button-container');
            // element.innerHTML = '<h3>Thank you for your payment!</h3>';
            // Or go to another URL:  actions.redirect('thank_you.html');
          });
        }
      }).render('#paypal');
	
	

	  const formSubmit = document.querySelector('#formSubmit');
	  formSubmit.addEventListener('submit', (e)=>{
		 e.preventDefault();
		 const lname = document.querySelector('#lastname').value
		 const fname = document.querySelector('#firstname').value
		 const mname = document.querySelector('#middlename').value
		 const email = document.querySelector('#email').value
		 const mobile = document.querySelector('#mobile').value
		 const address = document.querySelector('#address').value
		 const cardTotal = document.querySelector('.card-total')
		 const pickUp = document.querySelector('#pickup')
		 const doorToDoor = document.querySelector('#doorToDoor')
 
 
		 const payname = document.querySelector('#payname');
		 const payemail = document.querySelector('#payemail');
		 const paymobile = document.querySelector('#paymobile');
		 const payaddress = document.querySelector('#payaddress');
		 const amount = document.querySelector('#amount');
		 const delivery = document.querySelector('#delivery');
 
		 if (pickUp.checked){
			 delivery.innerHTML = pickUp.value
 
		 }else{
			 delivery.innerHTML = doorToDoor.value
		 }
 
		 
		 payname.innerHTML = (`${fname}  ${mname}  ${lname}`);
		 payemail.innerHTML = email;
		 paymobile.innerHTML = mobile;
		 payaddress.innerHTML = address;
		 amount.value = parseInt(cardTotal.innerHTML)
 
		 formSubmit.setAttribute('data-bs-toggle', 'modal')
		 formSubmit.setAttribute('data-bs-target', '#placeOrderModal')
		 formSubmit.setAttribute('data-bs-dismiss', 'modal')
	  })
 

	  const btnPrime = document.querySelector('.btn-prime')
	  btnPrime.addEventListener('click', ()=>{
		 const formSubmit = document.querySelector('#formSubmit');
		 formSubmit.removeAttribute('data-bs-toggle')
		 formSubmit.removeAttribute('data-bs-target')
		 formSubmit.removeAttribute('data-bs-dismiss')
		 
 
	  })