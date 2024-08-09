//n --> nominies for senator positions
//m --> no. of voters
#include <stdio.h>
int main(void)
{
	int t,n,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&m);
	    printf("%d\n",( (m/2) + 1));
	}
	return 0;
}