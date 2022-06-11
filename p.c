#include <stdio.h>

long bi(int n){
long long b=0;
int r,i=1;
while (n!=0){
r=n%2;n/=2;b+=r*i;i*=10;}
return b;
}

int tcomp()
{
    int n, i, x;
    printf("Enter a Number:\n");
    scanf("%d", &n);
    printf("Binary:\n%d\n", bi(n));
    n = ~n;
    n = n + 1;
    printf("2's complement of the number:\n");
    for (i = 7; i >= 0; i--)
    {
        x = n & (1 << i);
        if (x == 0)
            printf("0");
        else
            printf("1");
    }
}

int main()
{
    tcomp();
}