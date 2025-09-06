'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name);
  }
  bite(animal) {
    if (animal instanceof Carnivore) {
      return;
    }

    if (animal.hidden === true) {
      return;
    }
    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((anim) => anim.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
