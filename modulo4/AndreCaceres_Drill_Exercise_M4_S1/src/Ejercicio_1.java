//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Ejercicio_1 {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
       String[] utiles = new String[4];
       int[] precios = {299990, 234540, 159990, 345100};
       int total = 0;

       for (int i = 0; i < utiles.length; i++) {
           total += precios[i];
       }

        System.out.println("El total de la precio es: " + total);
        System.out.println("El IVA es: " + total * 0.19);
        System.out.println("El total mas IVA es: " + total * 1.19);
        System.out.println("El total de su compra en dolares es: " + ( total * 0.0011));

    }
}