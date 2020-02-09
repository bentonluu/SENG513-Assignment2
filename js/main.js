let currentOutputValue = "";
let currentHistoryValue = "";

function updateOutput(value) {
    let outputValue = document.getElementById("outputValue").value;

    if (currentOutputValue === "") {
        currentOutputValue = value;
    }
    else {
        currentOutputValue = outputValue + value;
    }
    console.log(currentOutputValue);
    document.getElementById("outputValue").value = currentOutputValue;
}

function updateHistory(outputEquation) {
    document.getElementById("historyValue").value = outputEquation
    currentHistoryValue = outputEquation;
}

function backspace() {
    let modifiedOutputValue = document.getElementById("outputValue").value.slice(0, -1);

    if (modifiedOutputValue === "") {
        document.getElementById("outputValue").value = "0";
    }
    else {
        document.getElementById("outputValue").value = modifiedOutputValue;
    }

    currentOutputValue = modifiedOutputValue;
    console.log(modifiedOutputValue);
}

function clearAll() {
    document.getElementById("outputValue").value = "0";
    document.getElementById("historyValue").value = "0";

    currentOutputValue = "";
    currentHistoryValue = ""
}

function equals() {
    let outputEquation = document.getElementById("outputValue").value;

    try {
        document.getElementById("outputValue").value = eval(outputEquation);
        updateHistory(outputEquation)
    }
    catch (e) {
        document.getElementById("outputValue").value = "ERROR";
        currentOutputValue = "";
    }
}
