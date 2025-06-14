#include <stdio.h>
int main() 
{
    int t,i,seat;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d",&seat);
        if(seat<=50)
        {
            printf("LEFT\n");
        }
        else
        {
            printf("RIGHT\n");
        }
    }
	return 0;
}