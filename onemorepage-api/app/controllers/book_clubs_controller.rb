class BookClubsController < ApplicationController
  def index
    @bookclubs = BookClub.all
    render json: @bookclubs
  end
end
