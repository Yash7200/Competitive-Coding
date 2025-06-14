#include <stdio.h>
int main() 
{
    int t,i,c;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d",&c);
        if(c<=20)
        {
            printf("COLD\n");
        }
        else
        {
            printf("HOT\n");
        }
    }
	return 0;
}