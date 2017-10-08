## deploy to heroku
1. `heroku create bo-heroku` => `git push heroku heroku:master`
2. remember that heroku runs `npm install --production`
3. you need to build your site locally, and check in build result. you local machine now effective becomes the buidl server
4. heroku should run `express`, not `webpack`
5. `heroku info`, `heroku logs`, `heroku ps:scale web=1`