import java.util.Scanner;

public class Ejercicio_2 {
    public static void main(String[] args) {
        float peso;
        float altura;
        float resultado;
        Scanner sc = new Scanner(System.in);

        System.out.print("Ingrese su peso en Kg: ");
        peso = sc.nextFloat();
        System.out.print("Ingrese su altura en metros: ");
        altura = sc.nextFloat();
        System.out.println();
        resultado = peso / (altura * altura);
        System.out.println("Calculando su IMC.....");
        System.out.println();
        System.out.println("Su indice de masa muscular es: " + resultado);

    }
}
