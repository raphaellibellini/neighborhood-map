const api = 'https://api.foursquare.com/v2'
const auth = 'client_id=AOCE0LHVYXMGPPCR3ZP4R12KWUC4U01GNVZLUHSJRORV3KSX&client_secret=YEX0XJBRYVEIFNQ2A3BRHMGBGUWEUVVBNWJA34GKO21CM00U&v=20190712&'
const defaultCenter = '45.434479,12.334806'

export const getAllLocations = () => 
    fetch(`${api}/venues/search?${auth}radius=400&ll=${defaultCenter}`)
    .then(res => res.json())
    .then(data => data.response.venues)

export const searchLocations = (query) =>
    fetch(`${api}/venues/search?${auth}radius=400&ll=${defaultCenter}&query=${query}`)
    .then(res => res.json())
    .then(data => data.response.venues)

export const getVenueDetails = (venueId) => 
    fetch(`${api}/venues/${venueId}?${auth}`)
    .then(res => res.json())
    .then(data => data.response.venue)
