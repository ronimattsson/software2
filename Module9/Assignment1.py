class Car:
    def __init__(self, license_plate, maximum_speed):
        self.current_speed = 0
        self.travelled_distance = 0
        self.license_plate = license_plate
        self.maximum_speed = maximum_speed

auto = Car("ABC-123", 142)
print(f"License plate: {auto.license_plate}\n"
      f"Maximum speed: {auto.maximum_speed} km/h\n"
      f"Current speed: {auto.current_speed} km/h\n"
      f"Travelled distance: {auto.travelled_distance} km")