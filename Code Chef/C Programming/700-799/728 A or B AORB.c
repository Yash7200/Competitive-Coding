#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&x,&y);
	    int score1=(500-(2*x))+(1000-(4*(x+y)));
	    int score2=(1000-(4*y))+(500-(2*(x+y)));
	    if(score1<=score2)
	    {
	        printf("%d\n",score2);
	    }
	    else
	    {
	        printf("%d\n",score1);
	    }
	}
	return 0;
}

