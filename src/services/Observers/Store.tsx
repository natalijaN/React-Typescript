import { Observer, Subject } from "../../types/observers";

interface Product {
  image: string;
  title: string;
  description: string;
  cost: number;
}

class Store implements Subject {
  private products: Product[] = [];
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    const observerExists = this.observers.includes(observer);

    if (observerExists) {
      throw new Error("Observer has already been subscribed ");
    }

    // Add a new observer
    this.observers.push(observer);
  }
  removeObserver(observer: Observer): void {
    console.log(`Detaching observer ${JSON.stringify(observer)}`);
    const observerIndex = this.observers.indexOf(observer);

    if (observerIndex === -1) {
      throw new Error("Observer does not exist");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Observer detached...");
  }
  notifyObservers(): void {
    console.log("Notifying observers...");

    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  // Changing state and notifying observers
  newProduct(product: Product): void {
    this.products.push(product);
    console.log("New product added to the store");
    this.notifyObservers();
  }
}

export default Store;
