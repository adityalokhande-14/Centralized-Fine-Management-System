from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token
from models import db, User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()

    if user and check_password_hash(user.password_hash, data['password']):
        access_token = create_access_token(identity={'username': user.username, 'role': user.role, 'domain': user.domain})
        return jsonify(access_token=access_token, role=user.role, domain=user.domain)

    return jsonify({"msg": "Invalid credentials"}), 401
