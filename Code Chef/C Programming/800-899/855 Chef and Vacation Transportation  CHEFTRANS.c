#include <stdio.h>
int main(void)
{
	int t,x,y,z;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&x,&y,&z);
	    if((x+y)==z)
	    {
	        printf("EQUAL\n");
	    }
	    else if((x+y)<z)
	    {
	        printf("PLANEBUS\n");
	    }
	    else if((x+y)>z)
	    {
	        printf("TRAIN\n");
	    }
	}
	return 0;
}
