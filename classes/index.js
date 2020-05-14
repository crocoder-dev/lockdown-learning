// Merlin the Wizard

class Hero {
  constructor(name, level) {
      this.name = name;
      this.level = level;
  }

  greet() {
    return `${this.name} says hello.`
  }
}

class Mage extends Hero {
  constructor(name, level, spells) {
    super(name, level);
    this.spells = spells;
  }

  castSpell(spellNumber) {
    return `${this.name} is casting ${this.spells[spellNumber]}`
  }
}

const merlin = new Mage('Merlin', 1, ['Magic Missile']);

console.log(merlin.greet(), merlin.castSpell(0));

