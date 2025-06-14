#include <stdio.h>
int main()
{
    int t,i,n,ld;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d",&n);
        ld=n%10;
        while(n>=10)
        {
            n=n/10;
        }
        printf("%d\n",(ld+n));
    }
    return 0;
}