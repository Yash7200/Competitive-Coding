#include <stdio.h>
int main() 
{
    int t,i,x;
    scanf("%d",&t);
    for (i=0;i<t;i++) 
    {
        scanf("%d",&x);
        if(x<1000)
        {
            printf("100\n");
        }
        else
        {
            printf("%d\n",((x*10)/100));
        }
    }
	return 0;
}