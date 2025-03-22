from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import db, Fine, User

fine_bp = Blueprint('fine', __name__)

@fine_bp.route('/pending', methods=['GET'])
@jwt_required()
def get_pending_fines():
    identity = get_jwt_identity()
    user = User.query.filter_by(username=identity['username']).first()
    
    if user.role == "admin":
        fines = Fine.query.all()
    else:
        fines = Fine.query.filter_by(user_id=user.id, paid=False).all()

    return jsonify([{"id": fine.id, "fine_type": fine.fine_type, "amount": fine.amount, "paid": fine.paid} for fine in fines])

@fine_bp.route('/pay/<int:fine_id>', methods=['POST'])
@jwt_required()
def pay_fine(fine_id):
    fine = Fine.query.get(fine_id)
    if fine:
        fine.paid = True
        db.session.commit()
        return jsonify({"msg": "Fine paid successfully!"})
    return jsonify({"msg": "Fine not found"}), 404
