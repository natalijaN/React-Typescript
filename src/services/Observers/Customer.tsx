import { Observer } from "../../types/observers";

class Customer implements Observer {
  update(): void {
    console.log("New vehicle added to the store, I have to go check it out...");
    // Actual business logic goes here...
  }
}

export default Customer;
