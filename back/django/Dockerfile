FROM python:3
WORKDIR /usr/src/django

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN python3 ./chatbots/ppy-hanspell/setup.py install

RUN python manage.py makemigrations
RUN python manage.py migrate

RUN python manage.py loaddata chatbots/fixtures/new_disease.json
RUN python manage.py loaddata chatbots/fixtures/notname.json
RUN python manage.py loaddata chatbots/fixtures/sentence.json
RUN python manage.py loaddata chatbots/fixtures/symptomdata.json

EXPOSE 8001

CMD ["python", "manage.py", "runserver", "8001" ]