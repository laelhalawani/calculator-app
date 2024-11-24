<script lang="ts">
    import Button from "$lib/Button.svelte";
    import processOperation from "$lib/operationProcessor.svelte";
    let numbers:string[] = ["1","2","3","4","5","6","7","8","9","0","."]
    let operations:string[] = ["+", "-", "*", "/", "^"]
    let input: string[] = $state([])
    let result: number|null = $state(null)
    function addToInput(value:string) {
        input = [...input, value]
        if (input.length > 0){
            result = processOperation(input.join(""))
            if (Number.isNaN(result)) {
                result = null
            }
        }
    }
    function clear() {
        input = []
        result = null
    }
    function onKeyboardInput(e:KeyboardEvent):void {
        if (e.key==="Backspace" && numbers.length>0){
            input.pop()
        }
        else if (e.key==="c")
        {
            clear()
        }
        else if (numbers.includes(e.key)){
            addToInput(e.key)
        }
        else if (operations.includes(e.key)){
            addToInput(e.key)
        }
       
        
    }

</script>

<main>
    <div class="calculator" onkeydowncapture={onKeyboardInput}>
        <div class="display">
            <p>{input.length>0 ? input.join(" ") : "_"}</p>
            <div class="reslt"><p>Result: {result}</p></div>
        </div>
        <div class="buttons">
            <div class="operations">
                <Button role="operation" text="C" useOnClick={clear} />
                {#each operations as operation (operation)}
                    <Button role="operation" text={operation} useOnClick={addToInput}/>
                {/each}
            </div>
            <div class="numbers">
                {#each numbers as number (number)}
                    <Button role="number" text={number} useOnClick={addToInput}/>
                {/each}
            </div>

        </div>
    </div>
</main>

<style>
.calculator {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #363232;
    min-width: 350px;
    min-height: 500px;
    width: 350px; 
    height: 500px;
    display: flexbox;
    padding: 10px;
}
.display {
    background-color: #5b5555;
    width: 350px;
    height: 100px;
    margin-bottom: 10px;
    display: block;
    color: #cab897;
    font-size: 20px;
    padding-top: 10px;
    padding-bottom: 0;
}
.display p {
    display: block;
    margin: 0;
    padding: 0 10px;
    font-size: 24px; /* Larger text for visibility */
    font-weight: 300;
    color: #cab897;
    text-align: left; /* Align text to the right */
    word-wrap: break-word; /* Prevent overflow by wrapping text */
    overflow: auto;
    height: 60%; /* Allow space for result and input */
    line-height: 1;
}
.reslt p {
    margin: 0;
    padding-right: 10px;
    font-size: 20px;
    overflow: hidden;
    font-weight: normal;
    color: #cab897; 
    text-align: right;

}

.buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 330px;
    height: 360px;
    background-color: rgb(225, 224, 211);
    padding: 10px;
}

.numbers {
    width: 300px;
   
}
.operations {
    width: 95px;
    display: block;
    margin-left: 15px;
}


</style>