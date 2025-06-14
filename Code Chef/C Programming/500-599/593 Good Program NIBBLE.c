#include <stdio.h>
int main() 
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        if((n%4)==0)
        {
            printf("Good\n");
        }
        else
        {
            printf("Not Good\n");
        }
    }
	return 0;
}