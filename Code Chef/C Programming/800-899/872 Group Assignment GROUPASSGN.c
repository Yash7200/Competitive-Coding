#include <stdio.h>
int main()
{
    int t,n,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d %d",&n,&x);
        if(x==n)
        {
            printf("%d\n",(n+1));
        }
        else if(x==1)
        {
            printf("%d\n",(2*n));
        }
        else if(x==(n+1))
        {
            printf("%d\n",(x-1));
        }
        else if(x==(2*n))
        {
            printf("1\n");
        }
        else
        {
            printf("%d\n",((2*n)-(x-1)));
        }
    }
    return 0;
}
