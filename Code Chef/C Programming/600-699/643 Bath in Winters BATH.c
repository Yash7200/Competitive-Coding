#include <stdio.h>
int main() 
{
    int t,x,y;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d",&x,&y);
        if(x<(2*y))
        {
            printf("0\n");
        }
        else if(x==(2*y))
        {
            printf("1\n");
        }
        else if(x>(2*y))
        {
            printf("%d\n",(x/(2*y)));
        }
    }
	return 0;
}