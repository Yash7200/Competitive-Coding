#include <stdio.h>
int main() 
{
    int t,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        if((x%3)==0)
        {
            printf("NORMAL\n");
        }
        else if((x%3)==1)
        {
            printf("HUGE\n");
        }
        else
        {
            printf("SMALL\n");
        }
    }
	return 0;
}