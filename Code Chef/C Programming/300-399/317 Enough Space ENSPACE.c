#include <stdio.h>
int main() 
{
    int t,x,y,i,n;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&n,&x,&y);
        if(n>=(x+(2*y)))
        {
            printf("YES\n");
        }
        else
        {
            printf("No\n");
        }
    }
	return 0;
}