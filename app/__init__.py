from flask import Flask, request

def creat_app():
    app = Flask(__name__)

    from app import routes
    routes.load(app)
    return app