#include <stdio.h>
int main()
{
    int t,n,newn;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        newn=0;
        while(n>0)
        {
            newn=(newn*10)+(n%10);
            n=n/10;
        }
        printf("%d\n",newn);
    }
    return 0;
}