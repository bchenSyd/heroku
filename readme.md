## deploy to heroku
1. remember that heroku runs `npm install --production`
2. you need to build your site locally, and check in build result. you local machine now effective becomes the buidl server
3. heroku should run `express`, not `webpack`
4. `heroku info`, `heroku logs`, `heroku ps:scale web=1`