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

    document.getElementById("outputValue").value = currentOutputValue;
}

function updateHistory(outputEquation) {
    document.getElementById("historyValue").value = outputEquation
    currentHistoryValue = outputEquation;
}

function backspace() {
    let output = document.getElementById("outputValue").value;

    if ((output.includes("Infinity") || output.includes("NaN") || output.includes("ERROR")) === false) {
        let modifiedOutputValue = output.slice(0, -1);

        if (modifiedOutputValue === "") {
            document.getElementById("outputValue").value = "0";
        }
        else {
            document.getElementById("outputValue").value = modifiedOutputValue;
        }

        currentOutputValue = modifiedOutputValue;
    }
}

function clearAll() {
    document.getElementById("outputValue").value = "0";
    document.getElementById("historyValue").value = "0";

    currentOutputValue = "";
    currentHistoryValue = "";
}

function equals() {
    let outputEquation = document.getElementById("outputValue").value;

    try {
        let output = eval(outputEquation);
        document.getElementById("outputValue").value = output;

        if (output.toString().includes("NaN") === false) {
            updateHistory(outputEquation);
        }
    }
    catch (e) {
        document.getElementById("outputValue").value = "ERROR";
        currentOutputValue = "";
    }
}
