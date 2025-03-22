from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
from models import db, User, Fine, Document

def init_db(app):
    db.init_app(app)
    with app.app_context():
        db.create_all()
        seed_data()

def seed_data():
    if not User.query.first():
        users = [
            User(aadhaar_number="123456789012", username="municipal_admin", password_hash=generate_password_hash("admin123"), role="admin", domain="municipal", email="municipal_admin@example.com"),
            User(aadhaar_number="123456789013", username="traffic_admin", password_hash=generate_password_hash("admin123"), role="admin", domain="traffic", email="traffic_admin@example.com"),
            User(aadhaar_number="123456789014", username="college_admin", password_hash=generate_password_hash("admin123"), role="admin", domain="college", email="college_admin@example.com"),
            User(aadhaar_number="123456789015", username="corporate_admin", password_hash=generate_password_hash("admin123"), role="admin", domain="corporate", email="corporate_admin@example.com"),
            User(aadhaar_number="123456789016", username="aditya_l", password_hash=generate_password_hash("user123"), role="user", domain="municipal", email="aditya@example.com"),
            User(aadhaar_number="123456789017", username="rugved_k", password_hash=generate_password_hash("user123"), role="user", domain="traffic", email="rugved@example.com"),
            User(aadhaar_number="123456789018", username="govind_u", password_hash=generate_password_hash("user123"), role="user", domain="college", email="govind@example.com"),
            User(aadhaar_number="123456789019", username="yash_h", password_hash=generate_password_hash("user123"), role="user", domain="corporate", email="yash@example.com"),
            User(aadhaar_number="123456789020", username="vr_studios", password_hash=generate_password_hash("user123"), role="user", domain="corporate", email="vr_studios@example.com"),
        ]
        fines = [
            Fine(user_id=5, fine_type="Property Tax", amount=500),
            Fine(user_id=6, fine_type="Traffic Violation", amount=300),
            Fine(user_id=7, fine_type="Library Fine", amount=200),
            Fine(user_id=8, fine_type="Corporate Penalty", amount=400),
        ]
        documents = [
            Document(domain="municipal", name="Property Tax Clearance.pdf"),
            Document(domain="traffic", name="Traffic Clearance Certificate.pdf"),
            Document(domain="college", name="Library Clearance.pdf"),
            Document(domain="corporate", name="Corporate Compliance Document.pdf"),
        ]
        db.session.bulk_save_objects(users)
        db.session.bulk_save_objects(fines)
        db.session.bulk_save_objects(documents)
        db.session.commit()
