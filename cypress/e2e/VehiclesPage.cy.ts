describe("Items API Test", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json", (req) => {
      req.reply((res: any) => {
        console.log("Mocked API Response:", res.body);
        return res;
      });
    }).as("getItems");
  });

  it("should fetch and display items", () => {
    cy.visit("http://localhost:5173/vehicles"); 
    cy.wait("@getItems"); 

    cy.contains("Vehicle name: HONDA MOTOR CO., LTD.").should("be.visible");
    cy.contains("Vehicle name: AMERICAN HONDA MOTOR CO., INC.").should("be.visible");

  });

  it("should show an error message if API fails", () => {
    cy.intercept("GET", "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json", {
      statusCode: 500,
      body: {},
    }).as("getItemsError");

    cy.visit("http://localhost:5173/vehicles");
    cy.wait("@getItemsError");

    cy.contains("Request failed with status code 500").should("be.visible");
  });

});