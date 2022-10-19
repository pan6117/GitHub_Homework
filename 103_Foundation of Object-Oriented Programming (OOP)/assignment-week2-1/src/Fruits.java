public class Fruits {

    private String name;
    private String color;
    private double weight;
    private boolean isTasty;
    private double price;
    private int quantity;

    public Fruits() {
        this.name = "Apple";
        this.color = "Red";
        this.weight = 480;
        this.isTasty = true;
        this.price = 18;
        this.quantity = 6;
    }

    public void addQuantity() {
        this.weight = this.weight + 80;
        this.price = this.price + 3;
        this.quantity = this.quantity + 1;
    }

    public void removeQuantity() {
        this.weight = this.weight - 80;
        this.price = this.price - 3;
        this.quantity = this.quantity - 1;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public boolean isTasty() {
        return isTasty;
    }

    public void setTasty(boolean tasty) {
        isTasty = tasty;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
