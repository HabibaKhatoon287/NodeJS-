
async function loadModule() {
    const myModule = await import('./dynamicExport.js'); // Dynamically import the module
    console.log(myModule.name);  // Outputs: Alice
    myModule.greet();            // Outputs: Hello, Alice!
}

loadModule();  // Call the function to load the module
