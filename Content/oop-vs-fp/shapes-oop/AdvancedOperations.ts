import { Shape } from "./shapes/Shape";

class AdvancedOperations {
    moveDoubleDistance(shape: Shape, targetX, targetY) {
        shape.moveTo(targetX, targetY)
        shape.moveTo(targetX, targetY)
    }

}