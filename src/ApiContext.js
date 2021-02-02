import React from 'react'

const ApiContext = React.createContext({
  recipes: [],
  postRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {},
})

export default ApiContext
