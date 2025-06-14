#include <stdio.h>
int main()
{
    int t,i,n,sum;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d",&n);
        sum=0;
        while(n>0)
        {
            sum=sum+(n%10);
            n=n/10;
        }
        printf("%d\n",sum);
    }
    return 0;
}