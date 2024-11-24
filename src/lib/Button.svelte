<script lang="ts">

    let {text, role, useOnClick: addToInput} = $props()
    function handleButtonPress(e: Event): string {
    const target = e.target as HTMLElement | null;
    if (target && target.hasAttribute("value")) {
        const element = target as HTMLInputElement | HTMLButtonElement; // Narrow target type
        if (typeof element.value === "string") {
            addToInput(element.value)
            return element.value;

        }
    }
    throw Error("Target is null or has no attribute value")
}
</script>

<button role={role} onclick={handleButtonPress} id={text==="0"?"zero":null} value={text}>{text}</button>

<style>
button {
    background-color: #5b5555;
    color: #cab897;
    font-size: 40px;
    margin: 3px;
    border-radius: 50%;
    border: 1px solid #cab897;
}
[role="number"]{
    height: 70px;
    width: 70px;
}
[role="operation"]{
    height: 50px;
    width: 50px;
    background-color: #745c5c;
    font-size: 25px;
}

button:hover {
    color: white;
    background-color: #444040;
}
button:active {
    background-color: #8f8888;
    scale: 0.9;
}
#zero {
    width: 150px;
    border-radius: 40px
}

button:hover {
    color: white;
    background-color: #444040;
}
button:active {
    background-color: #8f8888;
    scale: 0.9;
}
</style>