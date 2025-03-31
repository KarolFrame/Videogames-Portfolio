document.getElementById("threeColumnView").addEventListener("click", function() {
    const grid = document.getElementById("imageGrid");
    const buttonThree = document.getElementById("threeColumnView");
    const buttonOne = document.getElementById("singleColumnView");
    
    //Galeria
    grid.classList.remove("row-cols-md-1");
    grid.classList.add("row-cols-md-3");
    grid.classList.remove("row-cols-3");
    grid.classList.add("row-cols-1");
  
  
    //obtenemos las img
    const imagesArray = Array.from(grid.getElementsByTagName("img"));
  
    //obtenemos hijos grid
    const templateArray = Array.from(grid.getElementsByTagName("div"));
  
    //referencia del template
    const template = document.getElementById("imageTemplate");
  
    //eliminamos fotos 1x1
    templateArray.forEach(div => div.remove());
  
      //Crear los posts
      imagesArray.forEach((img) => {
        //Clonar template
        const clone = template.content.cloneNode(true);
    
        //SETEAR PARAMETROS
        //titulo
        const postTitle = clone.querySelector("h3");
        postTitle.textContent = `${img.dataset.title}`;
        //img
        const postImg = clone.querySelector("img");
        postImg.src = img.src;
        //guardar todos los parametros en el data
        postImg.dataset.title = img.dataset.title;
        postImg.dataset.date = img.dataset.date;
        postImg.dataset.platform = img.dataset.platform;
        postImg.dataset.genre = img.dataset.genre;
        postImg.dataset.description = img.dataset.description;
        postImg.dataset.link = img.dataset.link;
    
        // Agregar el clon al contenedor de posts
        grid.appendChild(clone);
      });
  
    buttonThree.style.color = "#AC8EFA";
    buttonOne.style.color = "grey";
  });
  
  document.getElementById("singleColumnView").addEventListener("click", function() {
    const grid = document.getElementById("imageGrid");
    const buttonThree = document.getElementById("threeColumnView");
    const buttonOne = document.getElementById("singleColumnView");
  
    //Post
    grid.classList.remove("row-cols-md-3");
    grid.classList.add("row-cols-md-8");
  
    //obtenemos las img
    const imagesArray = Array.from(grid.getElementsByTagName("img"));
  
   //obtenemos hijos grid
   const templateArray = Array.from(grid.getElementsByTagName("div"));
  
    //referencia del template
    const template = document.getElementById("postTemplate");
  
    //eliminamos fotos 3x3
    templateArray.forEach(div => div.remove());
  
    //Crear los posts
    imagesArray.forEach((img) => {
      //Clonar template
      const clone = template.content.cloneNode(true);
  
      //SETEAR PARAMETROS
      //titulo
      const postTitle = clone.querySelector("h2");
      postTitle.textContent = `${img.dataset.title}`;
      //fecha
      const postDate = clone.querySelector(".date");
      postDate.textContent = `${img.dataset.date}`;
  
      //img
      const postImg = clone.querySelector("img");
      postImg.src = img.src;
      //guardar todos los parametros en el data
      postImg.dataset.title = img.dataset.title;
      postImg.dataset.date = img.dataset.date;
      postImg.dataset.platform = img.dataset.platform;
      postImg.dataset.genre = img.dataset.genre;
      postImg.dataset.description = img.dataset.description;
      postImg.dataset.link = img.dataset.link;
      
      //Plataforma
      const postPlatform = clone.querySelector(".platform");
      postPlatform.textContent = `${img.dataset.platform}`;
      //description
      const postGenre = clone.querySelector(".genre");
      postGenre.textContent = `${img.dataset.genre}`;
      //description
      const postDescription = clone.querySelector(".decription");
      postDescription.textContent = `${img.dataset.description}`;

      //link
      const postLink = clone.querySelector("a");
      postLink.href = `${img.dataset.link}`;
  
      // Agregar el clon al contenedor de posts
      grid.appendChild(clone);
    });
  
    buttonThree.style.color = "grey";
    buttonOne.style.color = "#AC8EFA";
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            alert("Formulario enviado correctamente!");
        }

        form.classList.add('was-validated');
    });
});
    