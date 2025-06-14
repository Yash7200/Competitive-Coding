#include <stdio.h>

int main() 
{
    int t,i,x;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d",&x);
        if(x<=300)
        {
            printf("%d\n",3000);
        }
        else
        {
            printf("%d\n",(10*x));
        }
    }
	return 0;
}