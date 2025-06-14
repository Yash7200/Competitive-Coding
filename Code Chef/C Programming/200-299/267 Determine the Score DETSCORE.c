#include <stdio.h>
int main() 
{
    int t,i,x,n,testcase=10;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%d%d",&x,&n);
        printf("%d\n",((x/testcase)*n));
    }
	return 0;
}