# A6

### Variables
`src/app/nav/nav.component.html`
`src/app/footer/footer.component.html`
`src/index.html`
`src/app/app.component.ts`

### To build and deploy on heroku
- Make sure you modified variables from files above
- Place project into your git repo. Remember *project name* (directory name)
- Commit changes to new branch `git commit -a -m "Assignment 6 Release"`
- Then, build the app `ng build`, /dist folder had occured
- Return to the origin repository directory `cd ..`
- Create new Heroku application at https://dashboard.heroku.com, copy *Heroku Git URL* It will look like https://git.heroku.com/AppName.git
- Add new git remote with your *Heroku Git URL* `git remote add A6Heroku https://git.heroku.com/AppName.git`
- Push Assignment 6 subtree onto heroku remote `git subtree push --prefix *Project Name* A6Heroku master`
- #### Make sure heroku runs the app
Lastly, submit on blackboard removing ./node_modules from project directory.
