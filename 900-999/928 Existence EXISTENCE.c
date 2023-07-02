// 2 variables x,y

// satisfy given equation:
//     x^4 + 4*y^2 = 4*x^2*y
//     it is equal to "x^2 = 2*y" by solving mathematically
//     You can not solve it using pow() function of "math.h" ,due to its limitation

#include <stdio.h>
int main(void)
{
    int t;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        long int x,y;
        scanf("%ld %ld",&x,&y);
        x=x*x;
        y=2*y;
        if(x==y)
        {
            printf("YES\n");
        }
        else
        {
            printf("NO\n");
        }
    }
    return 0;
}