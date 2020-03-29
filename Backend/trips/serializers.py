from rest_framework import serializers
from .models import Trip


class TripSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Trip
        fields = ('id','name', 'user', 'date', 'place', 'notes','image')
