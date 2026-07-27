public class JosephusProtocol {
    
    public static int computeSurvivor(int prisoners, int step) {
        int survivor = 0;
        for (int i = 2; i <= prisoners; i++) {
            survivor = (survivor + step) % i;
        }
        return survivor;
    }

    public static void main(String[] args) {
        if (args.length == 2) {
            int n = Integer.parseInt(args[0]);
            int k = Integer.parseInt(args[1]);
            System.out.println(computeSurvivor(n, k));
        }
    }
}
