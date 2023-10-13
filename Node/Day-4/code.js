fetch("https://api.example.com/data")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error("Error:", error);
})


async function fetchData() {
    try {
        const response = await fetch("");
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error("Error:", error);
    }
}
fetchData();