unirest.post("https://randomprofile.p.rapidapi.com/api.php")
    .header("X-RapidAPI-Host", "randomprofile.p.rapidapi.com")
    .header("X-RapidAPI-Key", "SIGN-UP-FOR-KEY")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("format=csv")
    .send("fromAge=0")
    .send("packages=1,2,3")
    .send("toAge=100")
    .send("fullChildren=1")
    .send("countries=USA")
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });