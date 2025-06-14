#include <stdio.h>
int main() 
{
    int t,i,x,k;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&k,&x);
        printf("%d\n",(k-x));
    }
	return 0;
}