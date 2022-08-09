const plantCategory = [
  "All",
  "Hanging",
  "Fern",
  "Bromeliad",
  "Cactus & Succulent",
  "Aglaonema",
  "Other",
  "Flower",
  "Foliage plant",
  "Anthurium",
  "Palm",
  "Dieffenbachia",
  "Dracaena",
  "Ficus",
  "Aralia",
  "Philodendron",
  "Grass",
  "Topiairy",
  "Sansevieria",
  "Spathiphyllum",
  "Schefflera",
];

const bgPlantCategory = [
  "https://images.unsplash.com/photo-1551893133-a7c2b58f59b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZ2luZyUyMHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVybiUyMHBsYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1560241636-dcd877cb62ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJvbWVsaWFkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1483793435732-7047c6f91194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1Y2N1bGVudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1625666341991-94e3a437bb2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWdsYW9uZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1543459176-4426b37223ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1442458017215-285b83f65851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.pexels.com/photos/9297353/pexels-photo-9297353.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.unsplash.com/photo-1604512058215-361ce3d22039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW50aHVyaXVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1534364432722-54585249d766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBhbG0lMjBwbGFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://media.istockphoto.com/photos/dieffenbachia-in-the-pot-picture-id1319513138?b=1&k=20&m=1319513138&s=170667a&w=0&h=AcFA2fQsXMeYUaMGLpZO4UiH9cF46jbkFwM_Jc3TM4w=",
  "https://images.pexels.com/photos/6913508/pexels-photo-6913508.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.unsplash.com/photo-1518814723866-2541e2032ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1609142621730-db3293839541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhpbG9kZW5kcm9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10662469/pexels-photo-10662469.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6279940/pexels-photo-6279940.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.unsplash.com/photo-1620310252507-c65943dbd411?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3BhdGhpcGh5bGx1bXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1623134764472-394d61526de8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2NoZWZmbGVyYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
];

const shopItems = document.querySelector(".shop-items");
const shopCategoryItemsContainer = document.querySelector(
  ".shop-category-items-container"
);
const categoryLabels = document.querySelectorAll(".category-label");
const shopCategoryItems = document.querySelectorAll(".shop-category-items");

categoryLabels[0].innerHTML = plantCategory[1];
categoryLabels[1].innerHTML = plantCategory[2];
categoryLabels[2].innerHTML = plantCategory[3];
categoryLabels[3].innerHTML = plantCategory[4];
categoryLabels[4].innerHTML = plantCategory[5];
categoryLabels[5].innerHTML = plantCategory[6];
categoryLabels[6].innerHTML = plantCategory[7];
categoryLabels[7].innerHTML = plantCategory[8];
categoryLabels[8].innerHTML = plantCategory[9];
categoryLabels[9].innerHTML = plantCategory[10];
categoryLabels[10].innerHTML = plantCategory[11];
categoryLabels[11].innerHTML = plantCategory[12];
categoryLabels[12].innerHTML = plantCategory[13];
categoryLabels[13].innerHTML = plantCategory[14];
categoryLabels[14].innerHTML = plantCategory[15];
categoryLabels[15].innerHTML = plantCategory[16];
categoryLabels[16].innerHTML = plantCategory[17];
categoryLabels[17].innerHTML = plantCategory[18];
categoryLabels[18].innerHTML = plantCategory[19];
categoryLabels[19].innerHTML = plantCategory[20];

for (let j = 0; j <= 20; j++) {
  shopCategoryItems[j].style.backgroundImage = `url(${bgPlantCategory[j]})`;
}
