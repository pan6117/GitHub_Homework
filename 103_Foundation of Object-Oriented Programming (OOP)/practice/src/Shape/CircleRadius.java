package Shape;

public class CircleRadius extends Shape{
    private double area;

    public CircleRadius(double a) {
        this.area = a;
    }

    @Override
    public double getWH() {
        return getArea() / Math.PI / 2;
    }

}
