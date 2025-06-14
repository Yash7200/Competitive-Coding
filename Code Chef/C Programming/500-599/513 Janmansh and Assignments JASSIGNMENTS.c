#include <stdio.h>
int main() 
{
    int t,x;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&x);
        if(x>=8)
        {
            printf("No\n");
        }
        else
        {
            printf("Yes\n");
        }
    }
	return 0;
}