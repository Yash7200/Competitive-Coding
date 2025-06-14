#include <stdio.h>
int main() 
{
    int t,i,x,y;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if((3*x)<=(2*y))
        {
            printf("%d\n",(3*x));
        }
        else
        {
            printf("%d\n",(2*y));
        }
    }
	return 0;
}