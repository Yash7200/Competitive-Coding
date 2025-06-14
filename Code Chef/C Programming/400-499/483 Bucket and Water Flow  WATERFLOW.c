#include <stdio.h>
int main() 
{
    int t,i,w,x,y,z;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&w,&x,&y,&z);
        if((x-w)==(y*z))
        {
            printf("filled\n");
        }
        else if((x-w)>(y*z))
        {
            printf("Unfilled\n");
        }
        else if((x-w)<(y*z))
        {
            printf("overflow\n");
        }
    }
	return 0;
}