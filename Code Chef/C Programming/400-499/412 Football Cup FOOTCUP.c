#include <stdio.h>
int main() 
{
    int t,i,x,y;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if((x>=1)&&(y>=1))
        {
            if(x!=y)
            {
                printf("NO\n");
            }
            else
            {
                printf("YES\n");   
            }
        }
        else
        {
            printf("NO\n");
        }
    }
	return 0;
}