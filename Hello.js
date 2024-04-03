console.log("hello");

//to run, type node hello.js in terminal

//need to put inside function, and export default. !!!!
export default function Hello(app) {
    //request:
    // response: object to allow generate response. to send back ssth
    //together, can participate in the client server architecture.
    //server see ther request, do some work(go to database, do complex computation),
    // ane send back response.
    // nodemon App.js: x have to restart
    function sayHello(request, response) {
        response.send("Hello world");
    }

    function lifeIsGood(req, res) {
        res.send("Life is good");
    }

    app.get("/", sayHello)
    app.get("/life", lifeIsGood) //route: have a whole file?

    //function declared and called separately; instead declare right here.
    app.get("2+2", (req, res) => {
        res.send("2+2=4");  //embedded in route
    });


}