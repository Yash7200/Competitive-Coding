#include <stdio.h>
int main() 
{
    int t,i,n,k;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&n,&k);
        printf("%d\n",(n-k));
    }
	return 0;
}