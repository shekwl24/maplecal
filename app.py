import json, os

from flask import Flask, render_template, request
from selenium import webdriver
from bs4 import BeautifulSoup
from urllib.parse import quote_plus


app = Flask(__name__)


@app.route('/')
def index1():
    return render_template('home.html')

@app.route('/result', methods = ['POST'])
def result():
    if request.method == 'POST':
        result = request.form

    chrome_options = webdriver.ChromeOptions() # 크롬 옵션 객체 생성
    chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
    chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--no-sandbox")

    baseUrl = 'https://maplestory.nexon.com'
    nickname = request.form['nickname']
    url = baseUrl + '/Ranking/World/Total?c=' + quote_plus(nickname)
    driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)

    driver.get(url)
    html = driver.page_source
    soup = BeautifulSoup(html, 'lxml')

    ass = soup.find_all("a")
    for a in ass:
        if(a.text == nickname):
            baseUrl += a.attrs['href']
    fUrl = ''

    for i in baseUrl:
        if(i == '?'):
            fUrl += "/Equipment"
        fUrl += i

    driver.get(fUrl)
    driver.execute_script("chg_tab(3);") # 아케인 클릭 event(JavaScript)

    level = []
    number = []

    for i in range(1, 7):
        strr = 'ac_pot0' + str(i)
        driver.find_element_by_css_selector('.' + strr).click();
        html = driver.page_source
        soup = BeautifulSoup(html, 'lxml')

        abcd = soup.select('.' + strr + ' img')[0]

        if abcd.get('alt') == '': # 획득한 심볼이 없다면
            level.append(0)
            number.append(0)
        else:
            level.append(int(soup.find_all('div', class_='point_td')[0].text))
            number.append(int(soup.find_all('div', class_='point_td')[1].text.split()[0]))

    driver.quit()
    dict = {'levels' : level, 'numbers' : number}

    return json.dumps(dict) # json형태 dict{'levels' : [0, 0, 0, 0, 0, 0], 'numbers' : [0, 0, 0, 0, 0, 0]}

@app.route('/home')
def index2():
    return render_template('home.html')

@app.route('/symbol')
def index3():
    return render_template('symbol.html')

@app.route('/monsterPark')
def index4():
    return render_template('monsterPark.html')

@app.route('/hyperStats')
def index5():
    return render_template('hyperStats.html')

if __name__ == '__main__':
    app.run()
