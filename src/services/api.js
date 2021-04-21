export async function getProductsFromCategoryAndQuery(query) {
  return fetch(`https://serverest-api-agilizei-com.umbler.net/produtos?nome=${query}`)
    .then((response) => response.json())
    .then((data) => data);
}
