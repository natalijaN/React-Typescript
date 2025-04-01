export interface ICar {
  description(): string;
  getCost(): number;
}

export class BasicCar implements ICar {
  description(): string {
    return "Basic Model Car";
  }
  getCost(): number {
    return 30000;
  }
}

export abstract class CarOptions implements ICar {
  constructor(protected car: BasicCar) {}
  public abstract description(): string;
  public abstract getCost(): number;
}

export class EleganceCar extends CarOptions {
  public description(): string {
    return this.car.description() + " elegance";
  }
  public getCost(): number {
    return this.car.getCost() + 20000;
  }
}

export class FamilyCar extends CarOptions {
  public description(): string {
    return this.car.description() + " family car";
  }
  public getCost(): number {
    return this.car.getCost() + 30000;
  }
}
