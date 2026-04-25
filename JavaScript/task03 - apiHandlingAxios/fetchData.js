let api2 = "https://api.github.com/users";

async function fetchData() {
    let {data} = await axios.get(api2);
    // console.log(dataInsideObject.data);
    console.log(data);
    document.write(data[0].login);
}

fetchData();