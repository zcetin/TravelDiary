from django.shortcuts import render
from rest_framework import viewsets
from .models import Trip
from .serializers import TripSerializer


class TripView(viewsets.ModelViewSet):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer
