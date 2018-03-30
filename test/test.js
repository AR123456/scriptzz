var Nightmare = require("nightmare");
var expect = require("chai").expect;

// describe("Scriptz", function() {
//   // The default tests in mocha is 2 seconds.
//   // Extending it to 30 seconds to have time to load the pages

//   this.timeout(45000);
  // it("should send user to the landing page", function(done) 

  {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("file:///C:/Users/Duran's%20coding%20comp/Desktop/Code/scriptz/public/about.html")
      // Click the catalog link
      .click("button")
      // Evaluate the title
      .evaluate(function() {
        console.log("testing1234")
        return document.title;
      })
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Home | Scriptz");
        done();
      });
  

  // it("should present a link to course catalog after login", function(done) 
  {
    new Nightmare({ show: true })
      .goto("file:///C:/Users/Duran's%20coding%20comp/Desktop/Code/scriptz/public/index.html")
      // Enter username.
      // .type("#first_name", "Duran")
      // .type("#last_name", "Hill")
      .type("#username", "ResilD")
      // Enter password.
      .type("#userPw", "dummy*password")
      // Click the login button
      .type("#userPw2", "dummy*password")
      .click("#button")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("file:///C:/Users/Duran's%20coding%20comp/Desktop/Code/scriptz/public/med-list.html");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  };

  // it("should throw an error for fun", function() {
  //   throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
  // });
};
