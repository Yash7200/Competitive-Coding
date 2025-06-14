//Chef's team needs 'N' runs to win in 'M' overs

//player can score maximum 6 runs in a ball

#include <stdio.h>
int main(void)
{
	int t,n,m;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&m);
	    if(n<=(m*6*6))
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}