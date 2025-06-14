//car runs 15 km/1 ltr

//'X' ltr in car
//'Y' km is DAIICT

//Chef needs to return home so distance is '2 * Y'
#include <stdio.h>
int main(void)
{
	int t,X,Y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&X,&Y);
	    if(15*X>=2*Y)
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