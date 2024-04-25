function recursiveLoopSub(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log(tab[i].name);
    if (tab[i].subProjet && tab[i].subProjet.length > 0)
      recursiveLoopSub(tab[i].subProjet);
  }
}

var projet = [
  {
    name: "Projet 1",
    subProjet: [
      {
        name: "Subprojet 1",
        subProjet: [{ name: "SubProjetdeSubProject 1" }],
      },
    ],
  },
  { name: "Projet 2", subProjet: [] },
];

recursiveLoopSub(projet);

function recursiveLoopChildren(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log(tab[i].firstName, tab[i].lastName);
    if (tab[i].children && tab[i].children.length > 0)
      recursiveLoopChildren(tab[i].children);
  }
}

var people = [
  {
    // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [
      {
        firstName: "Jean",
        lastName: "Bernier",
        children: [
          {
            firstName: "Junior",
            lastName: "Bernier",
            children: [
              {
                firstName: "Jordan",
                lastName: "Bernier",
              },
              {
                firstName: "Luc",
                lastName: "Bernier",
              },
            ],
          },
        ],
      },
      {
        firstName: "Sacha",
        lastName: "Bernier",
      },
      {
        firstName: "Laurent",
        lastName: "Bernier",
      },
      {
        firstName: "Raphael",
        lastName: "Bernier",
      },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Luc",
    children: [
      {
        firstName: "Richard",
        lastName: "Luc",
        children: [
          {
            firstName: "Roméo",
            lastName: "Luc",
          },
        ],
      },
    ],
  },
];

recursiveLoopChildren(people);
