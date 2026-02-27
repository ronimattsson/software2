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