import React, { Component } from 'react'
import TokenService from '../services/token-service';

const RecipeListContext = React.createContext({
  recipe: [],
  recipeList: [],
  error: null,
  searchTerm: '',
  setError: () => {},
  clearError: () => {},
  setUser: () => {},
  setRecipe: () => {},
  setRecipeList: () => {},
  clearRecipeList: () => {},
  deleteRecipe: () => {},
  setSearchTerm: () => {},
})
export default RecipeListContext

export class RecipeListProvider extends Component {
  state = {
    recipe: {},
    user: TokenService.readJwtToken() || {},
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

  clearRecipeList = recipeList => {
    this.setState({ recipeList: []})
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
      user: this.state.user,
      recipeList: this.state.recipeList,
      error: this.state.error,
      searchTerm: this.state.searchTerm,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      setRecipe: this.setRecipe,
      setRecipeList: this.setRecipeList,
      clearRecipeList: this.clearRecipeList,
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
