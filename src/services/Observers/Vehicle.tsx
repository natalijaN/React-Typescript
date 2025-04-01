import { Observer } from "../../types/observers";

// Concrete Observer 1
class Vehicle implements Observer {
  update(): void {
    console.log("New vehicle added to the store, updating list of vehicles...");
    // Actual business logic goes here...
  }
}

export default Vehicle;
