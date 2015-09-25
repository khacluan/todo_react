class ListSerializer < ActiveModel::Serializer
  # cache key: 'lists', expires_in: 10.minutes

  attributes :title, :content, :url
end
