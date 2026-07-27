def josephus(n: int, k: int) -> int:
    survivor = 0
    for i in range(2, n + 1):
        survivor = (survivor + k) % i
    return survivor

if __name__ == "__main__":
    import sys
    if len(sys.argv) == 3:
        n_val = int(sys.argv[1])
        k_val = int(sys.argv[2])
        print(josephus(n_val, k_val))
