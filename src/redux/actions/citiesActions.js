export const citiesActions = {
  setCitiesPortion: (data) => ({type: "CITIES/SET_CITIES_PORTION", payload: data}),
  setTotalCitiesCount: (count) => ({type: "CITIES/CITIES_TOTAL_COUNT", payload: count}),
}