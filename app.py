import re

from flask import Flask, render_template, request

app = Flask(__name__)

regex = r'[^@]+@[^@]+\.[^@]+'
GRADES = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"]
SESSIONS = ["1 Session", "2 Sessions", "3 Sessions", "4 Sessions", "5 Sessions", "6 Sessions", "7 Sessions", "8 Sessions", "9 Sessions", "10 Sessions"]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/30-minute-session')
def form30():
    return render_template('30.html')


@app.route('/45-minute-session')
def form45():
    return render_template('45.html')


@app.route('/60-minute-session')
def form60():
    return render_template('60.html')


@app.route('/result', methods=["POST"])
def result():

    # Validation just in case user does not fill in input
    if not re.fullmatch(regex, request.form.get("email")) or not request.form.get("child_first_name") or not request.form.get("child_last_name") or not request.form.get("first_name") or not request.form.get("last_name") or not request.form.get("email") or request.form.get("child_grade") not in GRADES or request.form.get("amount_sessions") not in SESSIONS:
        return render_template("failure.html")

    # If user fills all of them properly
    return render_template('form-complete.html',
                           child_first_name=request.form['child_first_name'],
                           child_last_name=request.form['child_last_name'],
                           child_grade=request.form['child_grade'],
                           child_email=request.form['child_email'],
                           first_name=request.form['first_name'],
                           last_name=request.form['last_name'],
                           email=request.form['email'],
                           amount_sessions=request.form['amount_sessions']
                           )


if __name__ == "__main__":
    app.run()
