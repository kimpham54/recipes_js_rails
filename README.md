# README

An application that allows you to keep track of your recipes. This application is built with Ruby on Rails and Javascript.

## Installation

1. `cd recipes-api`
1. `bundle install`
1. `rake db:migrate`
1. to use test data run `rake db:seed`
1. to go to test environment run `rails s` which runs `http://localhost:3000/`


## trying to recoup this app in 2022

- install postgres, install ruby
- remove gemfile.lock, mimemagic no longer worked
- run bundle install again old versions
- had to add pg postgres newer specific version, brew install postgresql on os, bundle install 
- restart terminal sometimes when installing
- rake db:create, then rake db:migrate
- run rails s then go to the index.html site folder
- it all still works phew