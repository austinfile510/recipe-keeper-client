import React from 'react';
import RecipeApiService from '../services/recipe-api-service';
import Nav from '../Nav/Nav';
import RecipeListContext from '../contexts/RecipeListContext';

export default class RecipePage extends React.Component {
    static contextType = RecipeListContext

    componentDidMount() {
        const { recipeId } = this.props.match.params
        this.context.clearError()
        RecipeApiService.getRecipe(recipeId)
          .then(this.context.setRecipe)
          .catch(this.context.setError)

    handleDeleteRecipe = recipeId => {
        this.props.history.push(`/my-recipes`)
    }



    render() {
        const {}
    }
}