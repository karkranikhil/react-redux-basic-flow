export const addArticle = article =>{
  console.log('actions')
  return ({
    type: "ADD_ARTICLE",
    payload: article
  });
}