public class Main {

    public static void main(String[] args) {
        Fruits fruits = new Fruits();

        System.out.println("Original weight: " + fruits.getWeight());
        System.out.println("Original price: " + fruits.getPrice());
        System.out.println("Original quantity: " + fruits.getQuantity());

        fruits.addQuantity();
        System.out.println("The weight after add: " + fruits.getWeight());
        System.out.println("The price after add: " + fruits.getPrice());
        System.out.println("The quantity after add: " + fruits.getQuantity());

        fruits.removeQuantity();
        System.out.println("The weight after remove: " + fruits.getWeight());
        System.out.println("The price after remove: " + fruits.getPrice());
        System.out.println("The quantity after remove: " + fruits.getQuantity());
    }
}
