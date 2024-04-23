from flask import Flask, render_template, request, jsonify
from datamuse import construct_query

app = Flask(__name__)


@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == 'POST':
        print("received query params")
        data = request.get_json()
        word = data.get('word')
        code = data.get('code')
        amount = data.get('amount')

        # Call the function to get related words
        related_words = construct_query(word, code, amount)

        # Return the related words as JSON
        return jsonify(related_words)

    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True, port=5002)
