Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      get '/pmonsters', to: 'pmonsters#index' 
    end
  end
  root to: 'api/v1/pmonsters#index'
end
