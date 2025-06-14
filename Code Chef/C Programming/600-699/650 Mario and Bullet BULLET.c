#include <stdio.h>
int main() 
{
    int t,x,y,z;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&y,&z);
        y=y/x;
        if((z<y) ||(z==y))
        {
            printf("0\n");
        }
        else if(z>y)
        {
            printf("%d\n",(z-y));
        }
    }
	return 0;
}