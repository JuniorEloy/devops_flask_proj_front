from flask import send_from_directory
import os

def load(app):
    from app.login import login_bp
    app.register_blueprint(login_bp)

    @app.route('/favicon.ico')
    def favicon():
        return send_from_directory(os.path.join(app.root_path, 'static'),
                                'favicon.ico', mimetype='image/vnd.microsoft.icon')

    