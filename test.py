import requests
 
url = 'http://127.0.0.1:5000/templateNer/'
params = {
    'doc': 'hello world abc cys',
}
response = requests.post(url, data=params)
print(response.text)
