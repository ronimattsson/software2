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
        self.travelled_distance += float(hours) * float(self.current_speed)

def race(cars):
    done = False
    while not done:
        for car in cars:
            car.accelerate(randint(-10, 15))
            car.drive(1)
            if car.travelled_distance > 10000:
                done = True
    return cars