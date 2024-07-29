const express = require('express');
const router = express.Router();

const elementos = [
    { "symbol": "H", "name": "Hydrogen", "grupo": "No metales", "column": 1, "row": 1 },
    { "symbol": "He", "name": "Helium", "grupo": "Gases nobles", "column": 18, "row": 1 },
    { "symbol": "Li", "name": "Lithium", "grupo": "Alcalinos", "column": 1, "row": 2 },
    { "symbol": "Be", "name": "Beryllium", "grupo": "Alcalinoterreos", "column": 2, "row": 2 },
    { "symbol": "B", "name": "Boron", "grupo": "Metaloides", "column": 13, "row": 2 },
    { "symbol": "C", "name": "Carbon", "grupo": "No metales", "column": 14, "row": 2 },
    { "symbol": "N", "name": "Nitrogen", "grupo": "No metales", "column": 15, "row": 2 },
    { "symbol": "O", "name": "Oxygen", "grupo": "No metales", "column": 16, "row": 2 },
    { "symbol": "F", "name": "Fluorine", "grupo": "Halógenos", "column": 17, "row": 2 },
    { "symbol": "Ne", "name": "Neon", "grupo": "Gases nobles", "column": 18, "row": 2 },
    { "symbol": "Na", "name": "Sodium", "grupo": "Alcalinos", "column": 1, "row": 3 },
    { "symbol": "Mg", "name": "Magnesium", "grupo": "Alcalinoterreos", "column": 2, "row": 3 },
    { "symbol": "Al", "name": "Aluminum", "grupo": "Otros metales", "column": 13, "row": 3 },
    { "symbol": "Si", "name": "Silicon", "grupo": "Metaloides", "column": 14, "row": 3 },
    { "symbol": "P", "name": "Phosphorus", "grupo": "No metales", "column": 15, "row": 3 },
    { "symbol": "S", "name": "Sulfur", "grupo": "No metales", "column": 16, "row": 3 },
    { "symbol": "Cl", "name": "Chlorine", "grupo": "Halógenos", "column": 17, "row": 3 },
    { "symbol": "Ar", "name": "Argon", "grupo": "Gases nobles", "column": 18, "row": 3 },
    { "symbol": "K", "name": "Potassium", "grupo": "Alcalinos", "column": 1, "row": 4 },
    { "symbol": "Ca", "name": "Calcium", "grupo": "Alcalinoterreos", "column": 2, "row": 4 },
    { "symbol": "Sc", "name": "Scandium", "grupo": "Metales", "column": 3, "row": 4 },
    { "symbol": "Ti", "name": "Titanium", "grupo": "Metales", "column": 4, "row": 4 },
    { "symbol": "V", "name": "Vanadium", "grupo": "Metales", "column": 5, "row": 4 },
    { "symbol": "Cr", "name": "Chromium", "grupo": "Metales", "column": 6, "row": 4 },
    { "symbol": "Mn", "name": "Manganese", "grupo": "Metales", "column": 7, "row": 4 },
    { "symbol": "Fe", "name": "Iron", "grupo": "Metales", "column": 8, "row": 4 },
    { "symbol": "Co", "name": "Cobalt", "grupo": "Metales", "column": 9, "row": 4 },
    { "symbol": "Ni", "name": "Nickel", "grupo": "Metales", "column": 10, "row": 4 },
    { "symbol": "Cu", "name": "Copper", "grupo": "Metales", "column": 11, "row": 4 },
    { "symbol": "Zn", "name": "Zinc", "grupo": "Metales", "column": 12, "row": 4 },
    { "symbol": "Ga", "name": "Gallium", "grupo": "Otros metales", "column": 13, "row": 4 },
    { "symbol": "Ge", "name": "Germanium", "grupo": "Metaloides", "column": 14, "row": 4 },
    { "symbol": "As", "name": "Arsenic", "grupo": "Metaloides", "column": 15, "row": 4 },
    { "symbol": "Se", "name": "Selenium", "grupo": "No metales", "column": 16, "row": 4 },
    { "symbol": "Br", "name": "Bromine", "grupo": "Halógenos", "column": 17, "row": 4 },
    { "symbol": "Kr", "name": "Krypton", "grupo": "Gases nobles", "column": 18, "row": 4 },
    { "symbol": "Rb", "name": "Rubidium", "grupo": "Alcalinos", "column": 1, "row": 5 },
    { "symbol": "Sr", "name": "Strontium", "grupo": "Alcalinoterreos", "column": 2, "row": 5 },
    { "symbol": "Y", "name": "Yttrium", "grupo": "Metales", "column": 3, "row": 5 },
    { "symbol": "Zr", "name": "Zirconium", "grupo": "Metales", "column": 4, "row": 5 },
    { "symbol": "Nb", "name": "Niobium", "grupo": "Metales", "column": 5, "row": 5 },
    { "symbol": "Mo", "name": "Molybdenum", "grupo": "Metales", "column": 6, "row": 5 },
    { "symbol": "Tc", "name": "Technetium", "grupo": "Metales", "column": 7, "row": 5 },
    { "symbol": "Ru", "name": "Ruthenium", "grupo": "Metales", "column": 8, "row": 5 },
    { "symbol": "Rh", "name": "Rhodium", "grupo": "Metales", "column": 9, "row": 5 },
    { "symbol": "Pd", "name": "Palladium", "grupo": "Metales", "column": 10, "row": 5 },
    { "symbol": "Ag", "name": "Silver", "grupo": "Metales", "column": 11, "row": 5 },
    { "symbol": "Cd", "name": "Cadmium", "grupo": "Metales", "column": 12, "row": 5 },
    { "symbol": "In", "name": "Indium", "grupo": "Otros metales", "column": 13, "row": 5 },
    { "symbol": "Sn", "name": "Tin", "grupo": "Otros metales", "column": 14, "row": 5 },
    { "symbol": "Sb", "name": "Antimony", "grupo": "Metaloides", "column": 15, "row": 5 },
    { "symbol": "Te", "name": "Tellurium", "grupo": "Metaloides", "column": 16, "row": 5 },
    { "symbol": "I", "name": "Iodine", "grupo": "Halógenos", "column": 17, "row": 5 },
    { "symbol": "Xe", "name": "Xenon", "grupo": "Gases nobles", "column": 18, "row": 5 },
    { "symbol": "Cs", "name": "Cesium", "grupo": "Alcalinos", "column": 1, "row": 6 },
    { "symbol": "Ba", "name": "Barium", "grupo": "Alcalinoterreos", "column": 2, "row": 6 },
    { "symbol": "La", "name": "Lanthanum", "grupo": "Lantánidos", "column": 4, "row": 9 },
    { "symbol": "Ce", "name": "Cerium", "grupo": "Lantánidos", "column": 5, "row": 9 },
    { "symbol": "Pr", "name": "Praseodymium", "grupo": "Lantánidos", "column": 6, "row": 9 },
    { "symbol": "Nd", "name": "Neodymium", "grupo": "Lantánidos", "column": 7, "row": 9 },
    { "symbol": "Pm", "name": "Promethium", "grupo": "Lantánidos", "column": 8, "row": 9 },
    { "symbol": "Sm", "name": "Samarium", "grupo": "Lantánidos", "column": 9, "row": 9 },
    { "symbol": "Eu", "name": "Europium", "grupo": "Lantánidos", "column": 10, "row": 9 },
    { "symbol": "Gd", "name": "Gadolinium", "grupo": "Lantánidos", "column": 11, "row": 9 },
    { "symbol": "Tb", "name": "Terbium", "grupo": "Lantánidos", "column": 12, "row": 9 },
    { "symbol": "Dy", "name": "Dysprosium", "grupo": "Lantánidos", "column": 13, "row": 9 },
    { "symbol": "Ho", "name": "Holmium", "grupo": "Lantánidos", "column": 14, "row": 9 },
    { "symbol": "Er", "name": "Erbium", "grupo": "Lantánidos", "column": 15, "row": 9 },
    { "symbol": "Tm", "name": "Thulium", "grupo": "Lantánidos", "column": 16, "row": 9 },
    { "symbol": "Yb", "name": "Ytterbium", "grupo": "Lantánidos", "column": 17, "row": 9 },
    { "symbol": "Lu", "name": "Lutetium", "grupo": "Metales", "column": 3, "row": 6 },
    { "symbol": "Hf", "name": "Hafnium", "grupo": "Metales", "column": 4, "row": 6 },
    { "symbol": "Ta", "name": "Tantalum", "grupo": "Metales", "column": 5, "row": 6 },
    { "symbol": "W", "name": "Tungsten", "grupo": "Metales", "column": 6, "row": 6 },
    { "symbol": "Re", "name": "Rhenium", "grupo": "Metales", "column": 7, "row": 6 },
    { "symbol": "Os", "name": "Osmium", "grupo": "Metales", "column": 8, "row": 6 },
    { "symbol": "Ir", "name": "Iridium", "grupo": "Metales", "column": 9, "row": 6 },
    { "symbol": "Pt", "name": "Platinum", "grupo": "Metales", "column": 10, "row": 6 },
    { "symbol": "Au", "name": "Gold", "grupo": "Metales", "column": 11, "row": 6 },
    { "symbol": "Hg", "name": "Mercury", "grupo": "Metales", "column": 12, "row": 6 },
    { "symbol": "Tl", "name": "Thallium", "grupo": "Otros metales", "column": 13, "row": 6 },
    { "symbol": "Pb", "name": "Lead", "grupo": "Otros metales", "column": 14, "row": 6 },
    { "symbol": "Bi", "name": "Bismuth", "grupo": "Otros metales", "column": 15, "row": 6 },
    { "symbol": "Po", "name": "Polonium", "grupo": "Metaloides", "column": 16, "row": 6 },
    { "symbol": "At", "name": "Astatine", "grupo": "Halógenos", "column": 17, "row": 6 },
    { "symbol": "Rn", "name": "Radon", "grupo": "Gases nobles", "column": 18, "row": 6 },
    { "symbol": "Fr", "name": "Francium", "grupo": "Alcalinos", "column": 1, "row": 7 },
    { "symbol": "Ra", "name": "Radium", "grupo": "Alcalinoterreos", "column": 2, "row": 7 },
    { "symbol": "Ac", "name": "Actinium", "grupo": "Actínidos", "column": 4, "row": 10 },
    { "symbol": "Th", "name": "Thorium", "grupo": "Actínidos", "column": 5, "row": 10 },
    { "symbol": "Pa", "name": "Protactinium", "grupo": "Actínidos", "column": 6, "row": 10 },
    { "symbol": "U", "name": "Uranium", "grupo": "Actínidos", "column": 7, "row": 10 },
    { "symbol": "Np", "name": "Neptunium", "grupo": "Actínidos", "column": 8, "row": 10 },
    { "symbol": "Pu", "name": "Plutonium", "grupo": "Actínidos", "column": 9, "row": 10 },
    { "symbol": "Am", "name": "Americium", "grupo": "Actínidos", "column": 10, "row": 10 },
    { "symbol": "Cm", "name": "Curium", "grupo": "Actínidos", "column": 11, "row": 10 },
    { "symbol": "Bk", "name": "Berkelium", "grupo": "Actínidos", "column": 12, "row": 10 },
    { "symbol": "Cf", "name": "Californium", "grupo": "Actínidos", "column": 13, "row": 10 },
    { "symbol": "Es", "name": "Einsteinium", "grupo": "Actínidos", "column": 14, "row": 10 },
    { "symbol": "Fm", "name": "Fermium", "grupo": "Actínidos", "column": 15, "row": 10 },
    { "symbol": "Md", "name": "Mendelevium", "grupo": "Actínidos", "column": 16, "row": 10 },
    { "symbol": "No", "name": "Nobelium", "grupo": "Actínidos", "column": 17, "row": 10 },
    { "symbol": "Lr", "name": "Lawrencium", "grupo": "Metales", "column": 3, "row": 7 },
    { "symbol": "Rf", "name": "Rutherfordium", "grupo": "Metales", "column": 4, "row": 7 },
    { "symbol": "Db", "name": "Dubnium", "grupo": "Metales", "column": 5, "row": 7 },
    { "symbol": "Sg", "name": "Seaborgium", "grupo": "Metales", "column": 6, "row": 7 },
    { "symbol": "Bh", "name": "Bohrium", "grupo": "Metales", "column": 7, "row": 7 },
    { "symbol": "Hs", "name": "Hassium", "grupo": "Metales", "column": 8, "row": 7 },
    { "symbol": "Mt", "name": "Meitnerium", "grupo": "Metales", "column": 9, "row": 7 },
    { "symbol": "Ds", "name": "Darmstadtium", "grupo": "Metales", "column": 10, "row": 7 },
    { "symbol": "Rg", "name": "Roentgenium", "grupo": "Metales", "column": 11, "row": 7 },
    { "symbol": "Cn", "name": "Copernicium", "grupo": "Metales", "column": 12, "row": 7 },
    { "symbol": "Nh", "name": "Nihonium", "grupo": "Otros metales", "column": 13, "row": 7 },
    { "symbol": "Fl", "name": "Flerovium", "grupo": "Otros metales", "column": 14, "row": 7 },
    { "symbol": "Mc", "name": "Moscovium", "grupo": "Otros metales", "column": 15, "row": 7 },
    { "symbol": "Lv", "name": "Livermorium", "grupo": "Otros metales", "column": 16, "row": 7 },
    { "symbol": "Ts", "name": "Tennessine", "grupo": "Halógenos", "column": 17, "row": 7 },
    { "symbol": "Og", "name": "Oganesson", "grupo": "Gases nobles", "column": 18, "row": 7 }
  ];
router.get('/', function (req, res,next) {
    res.render('Try', { title: 'Try',Elementos:elementos,layout:false });
});

router.post('/delete', (req, res) => {
    console.log(req.body.EliminadoName);

    let deletedElement = null;

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] && elementos[i].symbol === req.body.EliminadoName) {
            // Guardar el elemento eliminado para mantener sus propiedades
            deletedElement = elementos[i];

            // Eliminar el elemento en la posición i y reemplazar con null
            elementos.splice(i, 1, null);
            break;
        }
    }

    // Si se encontró y eliminó un elemento, insertar un elemento null con las mismas propiedades row y column
    if (deletedElement) {
        let nullElement = {
            symbol: null,
            name: null,
            grupo: null,
            column: deletedElement.column,
            row: deletedElement.row
        };
        elementos.push(nullElement);
    }

    console.log(elementos);
    res.status(302).redirect('/');
});

module.exports = router;

