from flask import Flask, request, Response
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class transform_image(Resource):
    def get(self):
        return 'okay'

    def post(self):
        some_json = request.get_json()
        return {'you sent': some_json}

api.add_resource(transform_image, '/')

if __name__ == '__main__':
    app.run()
