class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_unique

  has_many :comments
  has_many :songs

  def generate_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    return user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_token
  end

  def ensure_session_token_unique
    while User.find_by(session_token: self.session_token)
      self.session_token = generate_token
    end
  end

  def reset_session_token
    self.session_token = generate_token
    ensure_session_token_unique
    self.save
    self.session_token
  end
end
