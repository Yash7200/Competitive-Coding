#include <stdio.h>
int main() 
{
    int a,b,c,x;
    scanf("%d%d%d%d",&a,&b,&c,&x);
    if((x==a)||(x==b)||(x==c))
    {
        printf("Yes");
    }
    else
    {
        printf("No");
    }
	return 0;
}