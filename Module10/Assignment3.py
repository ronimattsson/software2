class Elevator:
    def __init__(self, low, high):
        self.current_floor = int(low)
        self.bottom_floor = int(low)
        self.top_floor = int(high)
    def floor_up(self):
        if self.current_floor < self.top_floor:
            self.current_floor += 1
    def floor_down(self):
        if self.current_floor > self.bottom_floor:
            self.current_floor -= 1
    def go_to_floor(self, target_floor):
        steps = (self.current_floor - target_floor).__abs__()
        for i in range (steps):
            if target_floor < self.current_floor:
                self.floor_down()
            elif target_floor > self.current_floor:
                self.floor_up()

class Building:
    def __init__(self, bottom_floor, top_floor, number_of_elevators):
        self.elevators = []
        self.bottom_floor = bottom_floor
        self.top_floor = top_floor
        for i in range (number_of_elevators):
            self.elevators.append(Elevator(bottom_floor, top_floor))
    def run_elevator(self,elevator_num,target_floor):
        self.elevators[elevator_num].go_to_floor(target_floor)
    def fire_alarm(self):
        for elevator in self.elevators:
            elevator.go_to_floor(self.bottom_floor)