const write = document.querySelector("#write h2");

const buttons = document.querySelectorAll(".num");
const equal = document.querySelector("#equal");

let expression = "";


buttons.forEach((button) => {
    button.addEventListener("click", () => {

        let value = button.innerText;

        // clear
        if (value === "clr") {
            expression = "";
            write.innerText = "0";
        }

        // delete
        else if (value === "DEL") {
            expression = expression.slice(0, -1);
            write.innerText = expression || "0";
        }

        // percentage
        else if (value === "%") {
            expression += "/100";
            write.innerText = expression;
        }

        // numbers and operators
        else {
            expression += value;
            write.innerText = expression;
        }
    });
});

// equal button
equal.addEventListener("click", () => {
    try {
        expression = eval(expression).toString();
        write.innerText = expression;
    }

    catch {
        write.innerText = "Error";
        expression = "";
    }
});
