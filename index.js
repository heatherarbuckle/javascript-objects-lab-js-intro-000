var recipes = {};

function updateObjectWIthKeyAndValue(object, key, value) {
  var newRecipes = Object.assign({}, object, {key: value});
  return newRecipes;
}

// function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
//   delete key.value;
//   return recipes;
// }
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
