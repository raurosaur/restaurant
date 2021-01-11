class Item{
    constructor(name, desc, cost, vegan = false){
        this.name = name;
        this.desc = desc;
        this.cost = cost;
        this.vegan = vegan;
    }
    toString(){
       return `\n${this.desc}
    --------------- $${this.cost}`; 
    }
}

const Items = 
[new Item('Ploughman\'s', 'Serves 2\nA feast of English cheese, crusty bread, field green salad, roasted tomatoes, cornichon pickles, apple beet salad,\nbranston pickle & scotch egg', 21.99),
new Item('Banger', 'Roasted English sausage, mustard aioli, roasted tomatoes, sauteed cabbage and onions on a crusted baguette' ,12.99),
new Item('Macaroni Cheese','',7.49),
new Item('Pumpkin Juice', '', 4.99, true),
new Item('Sticky Toffee Pudding', '', 7.49),
];

export {Items};