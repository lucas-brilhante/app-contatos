const search = (array, input) => {
    return array.filter((contact) =>
        contact.name.toUpperCase().trim()
        .includes(
        input.toUpperCase().trim()
        )
    );
}

export default search;