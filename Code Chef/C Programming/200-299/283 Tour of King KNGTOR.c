#include <stdio.h>
int main(void) 
{
	int t,n,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&m);
	    printf("%d\n",((5*n)+(7*m)));
	}
	return 0;
}