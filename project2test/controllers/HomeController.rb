class HomeController < ApplicationController

  get '/' do
    options = {:query => {:api_key => 'fdf1b28c011f27510720ab3070943f3e'} }
    beer = HTTParty.get('http://api.brewerydb.com/v2/search?q=plum&type=beer', {:query => {:key => 'fdf1b28c011f27510720ab3070943f3e'} })
    puts beer
    erb :index
  end

  post '/respond' do
    puts params
    @rsvp = ResponsesModel.new
    @rsvp.name = params[:name]
    @rsvp.isattending = params.has_key?('isattending')
    @rsvp.hasplusone = params.has_key?('hasplusone')
    @rsvp.save

    @confirmation_message = 'Thanks!'
    if @rsvp.isattending == true
      @confirmation_message = @confirmation_message + ' We look forward to seeing you!'
    else
      @confirmation_message = @confirmation_message + ' We are sorry we will not see you.
        Thanks for responding'
    end

    erb :rsvp_confirmation
  end

end
