unirest.post("https://randomprofile.p.rapidapi.com/api.php")
    .header("X-RapidAPI-Host", "randomprofile.p.rapidapi.com")
    .header("X-RapidAPI-Key", "6e9af20717msh4255657bc8fb8e3p1b33b4jsn69b1467f0109")
    .header("Content-Type", "application/x-www-form-urlencoded")
    .send("format=json")
    .send("fromAge=0")
    .send("packages=1,2,3")
    .send("toAge=100")
    .send("fullChildren=1")
    .send("countries=USA")
    .end(function (result) {
        console.log(result.status, result.headers, result.body);
    });