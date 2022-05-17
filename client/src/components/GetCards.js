const getCards = (name, type) => {
    // fetch the appropriate card data from database
    const cards = fetch(`http://localhost:3001/api/v1/${name}?type=${type}`)
    .then(res => {
        // if data is found, send it out as json
        if (res.ok) {
            return res.json()
        } else {
            throw new Error('There was an api error.')
        }
    })
    return cards
}

export default getCards