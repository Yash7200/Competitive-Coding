#include <stdio.h>
int main() 
{
    int x,a,b;
    scanf("%d%d%d",&x,&a,&b);
    if((a+b)<=x)
    {
        printf("YES\n");
    }
    else
    {
        printf("NO\n");
    }
	return 0;
}