export const citiesActions = {
  setCitiesPortion: (data) => ({type: "CITIES/SET_CITIES_PORTION", payload: data}),
  setTotalCitiesCount: (count) => ({type: "CITIES/CITIES_TOTAL_COUNT", payload: count}),
  setCityToEdit: (city) => ({type: "CITIES/SET_CITY_TO_EDIT", payload: city}),
  setCityAction: (action) => ({type: "CITIES/SET_CITY_ACTION", payload: action}),
}