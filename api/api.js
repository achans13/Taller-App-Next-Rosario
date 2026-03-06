const URL = "https://api-react-taller-production.up.railway.app/";


const register = async (username,name,password) => {

    const response = await fetch(`${URL}api/auth/register` , {
        method: "POST",
        headers: {"Content-Type": "applicsaation/json"},
        body: JSON.stringify({username,name,password})
    })

    const data = await response.json();

    console.log("Información de register", data);
     
}

const login = async (username,password) => {
    const response = await fetch(`${URL}api/auth/login`,{
        method: "POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({username, password})
    })

    const data = await response.json();

    localStorage.setItem("token", data.token);
    localStorage.setItem("user",JSON.stringify(data.user))
    console.log("Login", data)
}

const getLocals = async (q="",type="",priceRange="",rating="",city="",zone="") => {

    const response = await fetch(`${URL}api/locals?q=${q}&type=${type}&priceRange=${priceRange}&rating=${rating}&city=${city}&zone=${zone}`);

    const data = await response.json();

    console.log(data);

    return data;
}

const postLocal = async (name, type, priceRange, city, zone, address, hours, photos) => {
    const response = await fetch(`${URL}api/locals`,{
        method: "POST",
        headers:{"Content-Type" : "application/json", 'Authorization' : `Bearer ${localStorage.getItem("token")}`}
        ,
        body: JSON.stringify({name, type, priceRange, city, zone, address, hours, photos})
    })

    const data = await response.json();

    console.log(data);
}

const getLocal = async (id) => {
    console.log(id,"id de getlocal");
    const response = await fetch(`${URL}api/locals/${id}`);

    console.log(response);

    const data = await response.json();

    console.log(data);

    return data;
}

const getUser = async (id) => {
    const response = await fetch(`${URL}api/users/${id}`)

    const data = await response.json();

    return data;
}

const postReview = async (id, rating, comment) => {
    const response = await fetch (`${URL}api/locals/${id}/reviews`,{
        method: "POST",
        headers:{"Content-Type" : "application/json", 'Authorization' : `Bearer ${localStorage.getItem("token")}`}
        ,
        body: JSON.stringify({rating, comment})
    })
    const data = await response.json();

    console.log(data);
}

const getDishes = async (q="",category="",dateFrom="",dateTo="",city="",LocalId="") => {

    const response = await fetch(`${URL}api/dishes?q=${q}&category=${category}&dateFrom=${dateFrom}&dateTo=${dateTo}&city=${city}&localId=${LocalId}`);

    const data = await response.json();

    console.log(data);

    return data;
}
const postDish = async (name, category, localId, city, price, description) => {
    const response = await fetch(`${URL}api/dishes`,{
        method: "POST",
        headers:{"Content-Type" : "application/json", 'Authorization' : `Bearer ${localStorage.getItem("token")}`}
        ,
        body: JSON.stringify({name, category, localId, city, price, description})
    })

    const data = await response.json();

    console.log(data);
}
const getDish = async (id) => {
    console.log(id,"id de getDish");
    const response = await fetch(`${URL}api/dishes/${id}`);

    console.log(response);

    const data = await response.json();

    console.log(data);

    return data;
}

const postReviewD = async (id, rating, comment) => {
    const response = await fetch (`${URL}api/dishes/${id}/reviews`,{
        method: "POST",
        headers:{"Content-Type" : "application/json", 'Authorization' : `Bearer ${localStorage.getItem("token")}`}
        ,
        body: JSON.stringify({rating, comment})
    })
    const data = await response.json();

    console.log(data);
}


export {
    register,
    login,
    getLocals,
    postLocal,
    getLocal,
    getUser,
    postReview,
    getDishes,
    postDish,
    getDish,
    postReviewD
}