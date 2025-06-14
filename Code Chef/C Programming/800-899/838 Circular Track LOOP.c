#include <stdio.h>
#include <math.h>
#include <stdlib.h>
int main(void)
{
	int t,a,b,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&a,&b,&m);
	    int straight=abs(b-a),reverse=abs(m-straight);
	    int cost=fmin(straight,reverse);
	    printf("%d\n",cost);
	}
	return 0;
}
