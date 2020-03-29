from django.db import models


class Trip(models.Model):
    name = models.CharField(max_length=50)
    user = models.CharField(max_length=50)
    date = models.CharField(max_length=50)
    place = models.CharField(max_length=50)
    notes = models.CharField(max_length=255)
    image = models.CharField(max_length=255)



    def __str__(self):
        return self.name
