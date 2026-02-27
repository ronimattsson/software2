from random import randint

class Car:
    def __init__(self, license_plate, maximum_speed):
        self.current_speed = 0
        self.travelled_distance = 0.0
        self.license_plate = license_plate
        self.maximum_speed = maximum_speed

    def accelerate(self, speed):
        self.current_speed += speed
        if self.current_speed > self.maximum_speed:
            self.current_speed = self.maximum_speed
        elif self.current_speed <= 0:
            self.current_speed = 0

    def drive(self, hours):
        self.travelled_distance += int(hours) * int(self.current_speed)

class Race:
    def __init__(self, name, distance, cars):
        self.name = name
        self.distance = distance
        self.cars = cars
    def hour_passes(self):
        for car in self.cars:
            car.accelerate(randint(-10, 15))
            car.drive(1)
    def print_status(self):
        for car in self.cars:
            print(f"{car.license_plate}: {car.travelled_distance} km")
    def race_finished(self):
        for car in self.cars:
            if car.travelled_distance >= self.distance:
                return True
        return False