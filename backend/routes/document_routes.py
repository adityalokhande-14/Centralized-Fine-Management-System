from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Document, User

document_bp = Blueprint('document', __name__)

@document_bp.route('/available', methods=['GET'])
@jwt_required()
def get_available_documents():
    identity = get_jwt_identity()
    user = User.query.filter_by(username=identity['username']).first()
    
    documents = Document.query.filter_by(domain=user.domain).all()
    return jsonify([{"id": doc.id, "name": doc.name} for doc in documents])
