class Elevator:
    def __init__(self, low, high):
        self.floor = int(low)
        self.bottom_floor = int(low)
        self.top_floor = int(high)
        def go_to_floor(self, target_floor):
            for i in range (target_floor):
                floor_up()
        def floor_up(self):
            if self.floor < self.highest:
                self.floor += 1
        def floor_down(self):
            if self.floor > self.lowest:
                self.floor -= 1