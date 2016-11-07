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

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
