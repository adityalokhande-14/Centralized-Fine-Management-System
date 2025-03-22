from flask import Flask
from flask_cors import CORS
from database import init_db
from routes.auth_routes import auth_bp
from routes.fine_routes import fine_bp
from routes.document_routes import document_bp

app = Flask(__name__)
app.config.from_object('config.Config')

CORS(app)  # Enable CORS for frontend-backend communication

# Initialize Database
init_db(app)

# Register Blueprints (API routes)
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(fine_bp, url_prefix='/api/fines')
app.register_blueprint(document_bp, url_prefix='/api/documents')

if __name__ == '__main__':
    app.run(debug=True)
