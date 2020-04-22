//CLASES

class Pizza {
  public tomate: boolean = false;
  public queso: string = "";
  public bacon: boolean = false;
  public masa: string = "";
  public otherIngredients: Array<string> = [""];

  setMasa(masa: string): Pizza {
    this.masa = masa;
    return this;
  }
  setCheese(queso: string): Pizza {
    this.queso = queso;
    return this;
  }

  setBacon(): Pizza {
    this.bacon = true;
    return this;
  }

  setOhterIngredients(ingredients: string[]): Pizza {
    this.otherIngredients = ingredients;
    return this;
  }

  build() {
    return this;
  }
}

const pepperoniPizza: Pizza = new Pizza();

pepperoniPizza
  .setBacon()
  .setCheese("Mozzarella")
  .setOhterIngredients(["pimienta", "ajo", "tomate"])
  .setMasa("Fina")
  .build();

console.log(pepperoniPizza);
