#include <stdio.h>
int main() 
{
    int t,i,x;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d",&x);
        printf("%d\n",(x%10));
    }
	return 0;
}