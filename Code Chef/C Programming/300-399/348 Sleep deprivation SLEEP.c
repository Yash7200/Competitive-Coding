#include <stdio.h>
int main() 
{
    int t,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        if(x<7)
        {
            printf("YES\n");
        }
        else
        {
            printf("No\n");
        }
    }
	return 0;
}