const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b7e21a7304msh9cbad96d4b859b2p17967cjsnaab2590c43b9",
    "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
  },
};

const main = document.querySelector("#main");
const plantData = async () => {
  try {
    const res = await fetch("https://house-plants.p.rapidapi.com/all", options);
    const data = await res.json();
    for (let i = 0; i <= data.length; i++) {
      if (data[i].category === "Schefflera") {
        console.log(data[i].latin);
      }
    }

    // data.forEach((plants) => {
    //   const ul = document.createElement("ul");
    //   ul.innerHTML = `<li>${plants.category}</li>
    //   <li><span></span>${plants.latin}</li>
    //   <li>${plants.common}</li>
    //   <li>${plants.watering}</li>`;
    //   main.append(ul);
    // });
  } catch (e) {
    console.log("ERROR", e);
  }
};

plantData();
//  ******************** BACK TO TOP ARROW ********************************

let mybutton = document.querySelector("#myBtn");
let navbar = document.querySelector(".navbar");
//   let navbarContent = document.querySelector('.keychainify-checked')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    navbar.style.backgroundColor = "rgba(18, 78, 21, 0.96)";
    // navbar.style.color = "white";
  } else {
    mybutton.style.display = "none";
    navbar.style.backgroundColor = "transparent";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  ******************** BACK TO TOP ARROW ********************************
