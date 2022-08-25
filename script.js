const modelBtn = document.querySelector("#click");
const closeBtn = document.querySelector("#closeBtn");
const model = document.querySelector("#model");

modelBtn.addEventListener("click", () => model.style.top = "20px");
const closeModel = (evt) => model.style.top = "-500px"

document.addEventListener("keydown", (e) => {
     if (e.key === "Escape") closeModel()
})

closeBtn.addEventListener("click", closeModel);

