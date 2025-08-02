from flask import Flask, render_template
app = Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")
@app.route('/confession')
def confession():
    return render_template("confession.html")
@app.route('/tricks')
def tricks():
    return render_template("tricks.html")
@app.route('/failed-Experiments.html')
def failed_experiments():
    return render_template("failed-Experiments.html")
@app.route('/note')
def note():
    return render_template("note.html")
if __name__ == "__main__":
    app.run(debug=True)
