#include <stdio.h>
int main() 
{
    int t,i,x,n,k;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&n,&x,&k);
        if((n*x)<=k)
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