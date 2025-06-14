#include <stdio.h>
int main() 
{
    int t,i,r1,r2,r3,r4;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&r1,&r2,&r3,&r4);
        if((r1+r2+r3+r4)>0)
        {
            printf("OUT\n");
        }
        else
        {
            printf("IN\n");
        }
    }
	return 0;
}