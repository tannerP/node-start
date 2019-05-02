/* eslint-disable no-undef */
const http = require("http");
const hostname = "localhost";
const port = 3028;

var friends = require("./friends2.json"); // Once for all times
var friendsXtr = require("./friends3.json"); // Once for all times

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-type", "text/html");
    response.write(
        `<!DOCTYPE html>
        <html lang="en">
                <head>
                       <meta charset="utf-8"> 
                       <meta http-equiv="X-UA-Compatible" ,content="IE=edge">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                       <meta name="description" content="Home Page">
                       <meta name="author" content="Carlos Arias">
                       <title>Netcentric Computing Home Page</title> 
                       <!-- Bootstrap core CSS --> 
                       <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
               </head> 
                <body> 
                       <div class="container" style="text-align: center">
                       <h1>Another Example of Node</h1><br>
        `
    );
    var currentDate = new Date();
    response.write(
        `<p>Current time is:   ${currentDate}  </p>`
    );
    response.write(
        `<table class="table table-bordered table-hover"> 
                               <thead> 
                                       <tr> 
                                            <th scope="col">First Name</th> 
                                            <th scope="col">First Name</th> 
                                            <th scope="col">Last Name</th> 
                                            <th scope="col">Phone</th> 
                                       </tr>
                               </thead>
                               <tbody>`
    );
    for (const gender in friends)
        for (const f in friends[gender])
            response.write(`
                                <tr>
                                        <td>  ${friends[gender][f]["firstName"]}  </td>
                                        <td>  ${friends[gender][f]["lastName"]}  </td>
                                        <td>  ${friends[gender][f]["phone"]}  </td>
                                        <td>  ${friends[gender][f]["gender"]}  </td>
                                </tr>
                                `
            );

    response.write(`
	                               </tbody> 
	                       </table>`
    );

    response.write(`
        <h1> Extra Credit </h1>
    `);

    response.write(
        `<table class="table table-bordered table-hover"> 
                               <thead> 
                                       <tr> 
                                            <th scope="col">First Name</th> 
                                            <th scope="col">First Name</th> 
                                            <th scope="col">Last Name</th> 
                                            <th scope="col">Phone</th> 
                                       </tr>
                               </thead>
                               <tbody>`
    );

    for (const gender in friendsXtr)
        for (var f in friendsXtr[gender])
            response.write(`
                                <tr>
                                        <td>  ${friendsXtr[gender][f]["firstName"]}  </td>
                                        <td>  ${friendsXtr[gender][f]["lastName"]}  </td>
                                        <td>  ${friendsXtr[gender][f]["phone"]}  </td>
                                        <td>  ${gender}  </td>
                                </tr>`);
    response.write(`
	                               </tbody> 
	                       </table>
	               </body> 
	        </html>`);
    response.end();

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
