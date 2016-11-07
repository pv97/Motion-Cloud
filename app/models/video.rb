# == Schema Information
#
# Table name: videos
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  title         :string           not null
#  description   :text
#  url           :string           not null
#  thumbnail_url :string
#  view_count    :integer          default(0)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Video < ActiveRecord::Base
	validates :title, :url, presence: true
  belongs_to :user
end
