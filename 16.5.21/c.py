import requests

session = requests.Session()
files = {"text_file": open("ido.txt","rb")}
payload ={'key':'textsome'}

req = session.post("http://localhost:8080/search", data=payload, files=files)
#print res