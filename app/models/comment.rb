# == Schema Information
#
# Table name: comments
#
#  id                :integer          not null, primary key
#  user_id           :integer
#  video_id          :integer
#  parent_comment_id :integer          default(-1)
#  body              :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ActiveRecord::Base
	validates :body, presence: true
  belongs_to :user
  belongs_to :video

	has_many :child_comments,
		primary_key: :id,
		foreign_key: :parent_comment_id,
		class_name: :Comment

	belongs_to :parent_comment,
		primary_key: :id,
		foreign_key: :parent_comment_id,
		class_name: :Comment
end
