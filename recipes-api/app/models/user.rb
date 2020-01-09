class User < ApplicationRecord
	has_many :recipes, inverse_of: :user
	accepts_nested_attributes_for :recipes, :allow_destroy => true
	has_secure_password
  	has_secure_password :recovery_password, validations: false
end
