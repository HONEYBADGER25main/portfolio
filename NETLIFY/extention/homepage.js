//Get elements
const filterButtons = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

//Filter functionality
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {
      if (filter === "all") {
        card.style.display = "flex";
      } else if (filter === "active" && card.classList.contains("active")) {
        card.style.display = "flex";
      } else if (filter === "inactive" && card.classList.contains("inactive")) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

//Search functionality
searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const name = card.querySelector("h3").innerText.toLowerCase();
    if (name.includes(query)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});

//Toggle active/inactive state dynamically
cards.forEach(card => {
  const toggle = card.querySelector("input[type='checkbox']");
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      card.classList.remove("inactive");
      card.classList.add("active");
    } else {
      card.classList.remove("active");
      card.classList.add("inactive");
    }
  });
});

//Remove button functionality
document.querySelectorAll(".remove-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    card.remove();
  });
});