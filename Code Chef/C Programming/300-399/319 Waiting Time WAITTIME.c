#include <stdio.h>
int main() 
{
    int t,k,x,i;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&k,&x);
        printf("%d\n",((k*7))-x);
    }
	return 0;
}