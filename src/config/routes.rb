Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      get '/pmonsters', to: 'pmonsters#index' 

      get '/team_formations', to: 'team_formations#index' 
    end
  end
  root to: 'api/v1/pmonsters#index'
end
