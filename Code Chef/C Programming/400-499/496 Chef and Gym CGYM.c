#include <stdio.h>
int main() 
{
    int t,i,x,y,z;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&z);
        if(x>z)
        {
            printf("0\n");
        }
        else if((x+y)<=z)
        {
            printf("2\n");
        }
        else
        {
            printf("1\n");
        }
    }
	return 0;
}