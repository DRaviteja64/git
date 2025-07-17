const inputDisplay = document.querySelector(".check");
const buttonvalue = document.querySelectorAll(".check1");

for (let i = 0; i < buttonvalue.length; i++) {
    buttonvalue[i].addEventListener("click", (event) => {
        const value = event.target.innerText;

        if (value === "AC") {
            inputDisplay.value = "";  
        } else if (value === "=") {
            try {
                inputDisplay.value = eval(inputDisplay.value);
            } catch (error) {
                inputDisplay.value = "Error";
            }
        } else {
            inputDisplay.value += value;
        }
    });
}
