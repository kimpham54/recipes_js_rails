class User < ApplicationRecord
	has_many :recipes
	has_secure_password
  	has_secure_password :recovery_password, validations: false
end
