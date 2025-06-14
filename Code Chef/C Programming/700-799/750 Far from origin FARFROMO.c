#include <stdio.h>
#include <math.h>
int main(void)
{
	int t,x1,x2,y1,y2;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&x1,&y1,&x2,&y2);
	    if((sqrt(pow(x1,2)+pow(y1,2)))==(sqrt(pow(x2,2)+pow(y2,2))))
	    {
	        printf("EQUAL\n");
	    }
	    else if((sqrt(pow(x1,2)+pow(y1,2)))<(sqrt(pow(x2,2)+pow(y2,2))))
	    {
	        printf("BOB\n");
	    }
	    else if((sqrt(pow(x1,2)+pow(y1,2)))>(sqrt(pow(x2,2)+pow(y2,2))))
	    {
	        printf("ALEX\n");
	    }
	}
	return 0;
}