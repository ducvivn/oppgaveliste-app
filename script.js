const input = document.getElementById("oppgave_inp");
const button = document.getElementById("leggtil_btn");
const todoliste = document.getElementById("todo_liste");

//adder event for når man trykker på "legg til" knappen
button.addEventListener("click", () =>{
    //lagrer teksten som brukeren har skrevet.
    const text = input.value.trim();
    //hvis teksten er tom send en melding tilbake.
    if (text === ""){
        alert("skriv noe");
        return;
    }
    //ny ellement som er li type, 
    const li = document.createElement("li");

    //lager en checkboks
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    //
    const spanText = document.createElement("span");
    spanText.classList.add("text");
    spanText.textContent = text;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete");

    li.appendChild(checkBox);
    li.appendChild(spanText);
    li.appendChild(deleteBtn);

    checkBox.addEventListener("change", () => {
        li.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", () => {
        li.classList.add("fade-out");
        setTimeout(()=>{
            li.remove();
        }, 400);
    });

    todoliste.appendChild(li);
    input.value = "";
});

