#include <stdio.h>
int main() 
{
    int t,n,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&n,&x);
        if(n>x)
        {
            printf("NO\n");
        }
        else if(n==x)
        {
            printf("YES\n");
        }
        else if((x%n)==0)
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