import React, { Component } from 'react'

const RecipeListContext = React.createContext({
  recipeList: [],
  error: null,
  searchTerm: '',
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setRecipe: () => {},
  setRecipeList: () => {},
  deleteRecipe: () => {},
  setSearchTerm: () => {},
})
export default RecipeListContext

export class RecipeListProvider extends Component {
  state = {
    recipe: [],
    user: [],
    recipeList: [],
    error: null,
    searchTerm: ''
  };

  setSearchTerm = searchTerm => {
    this.setState({ searchTerm })
  }

  deleteRecipe = recipeId => {
    this.setState({
      recipe: this.state.recipe.filter((recipe) => recipe.id !== recipeId)
    })
  }

  setRecipe = recipe => {
    this.setState({ recipe })
  }

  setUser = user => {
    this.setState({ user })
  }

  setRecipeList = recipeList => {
    this.setState({ recipeList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      recipeList: this.state.recipeList,
      error: this.state.error,
      searchTerm: this.state.searchTerm,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      setRecipe: this.setRecipe,
      setRecipeList: this.setRecipeList,
      deleteRecipe: this.deleteRecipe,
      setSearchTerm: this.setSearchTerm,
    }
    return (
      <RecipeListContext.Provider value={value}>
        {this.props.children}
      </RecipeListContext.Provider>
    )
  }
}
