class Api::CharactersController < ApplicationController
  before_action :set_character, except: [:index]

  def index
    if nerd_type = params[:nerd_type]
      render json: Character.all.where(nerd_type: nerd_type)
    else
      render json: Character.all
    end
  end

  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: { errors: @character.errors.full_messages.join(',') }, status: :bad_request
    end
  end

  def destroy
    @character.destroy
    render json: @character
  end

  private
    def set_character
      @character = Character.find(params[:id])
    end

    def character_params
      params.require(:character).permit(:name)
    end
end

