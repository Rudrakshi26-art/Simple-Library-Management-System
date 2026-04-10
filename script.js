let products = {
  data: [
    {
      title: "NCERT",
      author: "Rudrakshi Rathore",
      subject: "Basic",
      date: "2022-01-31",
      image: "img/NCER.jpg",
    },
    {
      title: "Cryptography",
      author: "Rudrakshi Rathore",
      subject: "IT",
      date: "2022-11-11",
      image: "img/crypto.jpg",
    },
    {
      title: "DBMS",
      author: "Rudrakshi Rathore",
      subject: "IT",
      date: "2022-12-22",
      image: "img/Database.jpg",
    },
    {
      title: "Computer Networks and Security",
      author: "Rudrakshi Rathore",
      subject: "CSE",
      date: "2022-03-20",
      image: "img/cns.jpg",
    },
    {
      title: "Mental Peace",
      author: "Rudrakshi Rathore",
      subject: "Novel",
      date: "2022-11-10",
      image: "img/Network.jpg",
    },
    {
      title: "Artificial Intelligence",
      author: "Rudrakshi Rathore",
      subject: "ISE",
      date: "2022-12-20",
      image: "img/Os.jpg",
    },
    {
      title: "System Design",
      author: "Rudrakshi Rathore",
      subject: "CSE",
      date: "2022-12-20",
      image: "img/Sdesign.jpg",
    },
    {
      title: "Mathematics",
      author: "Rudrakshi Rathore",
      subject: "Basic",
      date: "2022-01-21",
      image: "img/Maths.jpg",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      subject: "Fantasy",
      date: "1999-12-20",
      image: "img/hp.jpg",
    },
    {
      title: "Operating System",
      author: "Rudrakshi Rathore",
      subject: "CSE",
      date: "2022-04-20",
      image: "img/Nt.jpg",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      subject: "Novel",
      date: "1995-12-22",
      image: "img/ah.jpg",
    },
    {
      title: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      subject: "Novel",
      date: "2002-02-02",
      image: "img/htw.jpeg",
    },
    {
      title: "Image Processing",
      author: "Rudrakshi Rathore",
      subject: "ISE",
      date: "2021-12-20",
      image: "img/wta.jpg",
    },
    {
      title: "Physics",
      author: "Rudrakshi Rathore",
      subject: "Basic",
      date: "2022-12-20",
      image: "img/Ncert.jpg",
    },
    {
      title: "UNIX",
      author: "Rudrakshi Rathore",
      subject: "IT",
      date: "2022-08-08",
      image: "img/Nt.jpg",
    },
  ],
};

// Create book cards dynamically
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.subject, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  image.setAttribute("alt", i.title);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let title = document.createElement("h5");
  title.classList.add("title");
  title.innerText = i.title;
  container.appendChild(title);

  let author = document.createElement("h6");
  author.classList.add("author");
  author.innerText = "Author: " + i.author;
  container.appendChild(author);

  let sub = document.createElement("h6");
  sub.classList.add("sub");
  sub.innerText = "Subject: " + i.subject;
  container.appendChild(sub);

  let date = document.createElement("h6");
  date.classList.add("date");
  date.innerText = "Published: " + i.date;
  container.appendChild(date);

  card.appendChild(container);
  document.getElementById("Books").appendChild(card);
}

// Filter books by category
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value === "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// Search functionality
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document
    .getElementById("search-input")
    .value.toUpperCase();

  let elements = document.querySelectorAll(".title");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.toUpperCase().includes(searchInput)) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

// Display all books on page load
window.onload = () => {
  filterProduct("all");
};