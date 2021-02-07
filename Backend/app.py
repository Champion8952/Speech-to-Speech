from flask import Flask, render_template , request , redirect
import speech_recognition as sr
from google_trans_new import google_translator
from gtts import gTTS 
from playsound import playsound

app = Flask(__name__)


@app.route("/",methods=["GET" , "POST"])
def index():
    transcript = ""

    if request.method == "POST":
        print("FORM DATA RECIEVED") 
    
        if "file" not in request.files:
            return redirect(request.url)
    
        file = request.files["file"]
    
        if file.filename == "":
            return redirect(request.url)

        if file:
            recognizer = sr.Recognizer()
            audioFile = sr.AudioFile(file)
            with audioFile as source:
                data = recognizer.record(source)
            transcript = recognizer.recognize_google(data, key = None)
        
        file1 = open("Language1.txt","r+")
        file1.seek(0)
        file1.write(transcript)
        file1.close()

        print("File Created")


    return render_template('index.html' , transcript = transcript)
     
@app.route("/mt")
def mt():
    
    file1 = open("Language1.txt","r+",encoding="utf-8") 
    languageStr = file1.read()
    
    file2 = open("Language2.txt","r+",encoding="utf-8") 
    
    to_lang = 'hi'

    if file1.mode == 'r+':
        
        translator = google_translator()
        translate_text = translator.translate(text=languageStr, lang_tgt = to_lang)
             
        file2.write(translate_text)    
        
        file1.close()
        file2.close()
    
    return "DONE TRANSLATING"
@app.route("/tts")
def tts():
    
    file1 = open("Language2.txt","r",encoding="utf-8")
    my_text = file1.read()
    to_lang = 'hi'

    output = gTTS(text = my_text, lang = to_lang , slow= False)
    output.save("TTS_OUTPUT.mp3")

    
    playsound("TTS_OUTPUT.mp3")
    

    return "Playing the Audio"

if __name__ == "__main__":
    app.run(debug = True , threaded = True)
