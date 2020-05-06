const stringCompare = (property) => (a, b) => {
    if (a[property] > b[property]) {
        return 1;
    }
    if (a[property] < b[property]) {
        return -1;
    }
    // a must be equal to b
    return 0;
}

const ordenacao = (array, tag) => {
    let array_property = 'name';
    switch (tag) {
        case 0:
        default:
            array_property = 'name';
            break;
        case 1:
            array_property = 'country';
            break;
        case 2:
            array_property = 'company';
            break;
        case 3:
            array_property = 'department';
            break;
        case 4:
            array_property = 'admissionDate';
            break;
    }
    return array.sort(stringCompare(array_property));
}

export default ordenacao;