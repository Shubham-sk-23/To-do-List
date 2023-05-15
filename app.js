let item = document.querySelector(".item");
let quantity = document.querySelector(".quantity");
let submit = document.querySelector(".submit");
let main = document.querySelector(".main");


submit.addEventListener("click", (e) => {

    e.preventDefault()

  if (item.value === "" || quantity.value === "") {
    
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Add the items and values!",
      // footer: '<a href="">Why do I have this issue?</a>'
    });
  } else {
    // Creating two elements to store the user data
    let itemName = document.createElement("h1");
    let quantityValue = document.createElement("h1");
    // Creating a section two add the two items inside it and giving it a class
    let section = document.createElement("div");
    section.classList.add("item-added");

    // adding the section
    main.insertAdjacentElement("afterend", section);
    itemName.innerHTML = ` <button class="cross btn btn-outline-danger delete-button">X</button> ${item.value} `;
    quantityValue.innerHTML = `${quantity.value}`;
    itemName.classList.add("item-name");
    quantityValue.classList.add("quantity-value");

    // Adding the items inside the section div
    section.insertAdjacentElement("afterbegin", quantityValue);
    section.insertAdjacentElement("afterbegin", itemName);

    // Setting the value of the form to empty
    item.value = "";
    quantity.value = "";
    Swal.fire("Item added to the cart");

    // Removing using the cross button
    let button = document.querySelector('.delete-button')
    button.addEventListener('click',()=>{
      section.remove()
    })
    // Adding the class of line-through for the finished task
    itemName.addEventListener("click",(e)=>{
        itemName.classList.add("completed-item")
        quantityValue.classList.add("completed-item")
    })

}
});


