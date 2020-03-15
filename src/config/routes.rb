Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do

      # 一覧
      get '/pmonsters', to: 'pmonsters#index' 

      # タイプ
      get '/type1s', to: 'type1s#index'

      # チーム編成
      get '/team_formations', to: 'team_formations#index' 
    end
  end
  root to: 'api/v1/pmonsters#index'
end
