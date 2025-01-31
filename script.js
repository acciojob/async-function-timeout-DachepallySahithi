//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);
    const output = document.getElementById("output");
    
    if (!text || isNaN(delay) || delay < 0) {
        output.innerText = "Please enter valid text and a non-negative delay.";
        return;
    }
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
    output.innerText = text;
});