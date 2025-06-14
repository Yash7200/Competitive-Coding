#include <stdio.h>
int main() 
{
    int t,x,a,b;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d",&x,&a,&b);
        if(x<=(a+(2*b)))
        {
            printf("Qualify\n");
        }
        else
        {
            printf("NotQualify\n");
        }
    }
	return 0;
}