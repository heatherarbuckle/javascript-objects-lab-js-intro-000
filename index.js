var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  delete key.value;
  return recipes;
}
//
// function deleteFromObjectByKey(object, key) {
//   var newRecipes = Object.assign({}, object);
//   delete newRecipes.key;
//   return newRecipes;
// }
//
// function destructivelyDeleteFromObjectByKey(object, key) {
//   delete.object[key];
//   return recipes;
// }
