#include <stdio.h>
int main() 
{
    int t,i,x,y;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if(x>=y)
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