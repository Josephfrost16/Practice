const comparison = function (variable, str) {
    return variable === str;
};

// Función para obtener la clase de grupo correspondiente
const getGrupo = function(grupo) {
    // Definir las clases de color según el grupo
    const grupoClasses = {
        'Gases nobles': 'grupo-GasesNobles',
        'Metales': 'grupo-Metales',
        'No metales': 'grupo-NoMetales',
        'Alcalinos': 'grupo-Alcalinos',
        'Alcalinoterreos': 'grupo-Alcalinoterreos',
        'Metaloides': 'grupo-Metaloides',
        'Halógenos': 'grupo-Halógenos',
        'Lantánidos': 'grupo-Lantánidos',
        'Actínidos': 'grupo-Actínidos',
        'Otros metales': 'grupo-OtrosMetales'
    };

    // Devolver la clase correspondiente al grupo
    return grupoClasses[grupo] || '';
};

exports.comparison = comparison;
exports.getGrupo = getGrupo;
