from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    aadhaar_number = db.Column(db.String(12), unique=True, nullable=False)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    role = db.Column(db.String(10), nullable=False)  # "admin" or "user"
    domain = db.Column(db.String(50), nullable=False)  # e.g., "municipal", "traffic"
    email = db.Column(db.String(100), unique=True, nullable=False)

class Fine(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    fine_type = db.Column(db.String(100), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    paid = db.Column(db.Boolean, default=False, nullable=False)

class Document(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    domain = db.Column(db.String(50), nullable=False)
    name = db.Column(db.String(100), nullable=False)
